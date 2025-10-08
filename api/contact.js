const mongoose = require('mongoose');
const ContactRequest = require('../backend/models/ContactRequest');

// Optimized MongoDB connection for serverless
let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection && mongoose.connection.readyState === 1) {
    return cachedConnection;
  }

  const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error('Missing MongoDB connection string');
  }

  try {
    cachedConnection = await mongoose.connect(mongoUri, {
      maxPoolSize: 1, // Maintain only 1 connection for serverless
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      bufferMaxEntries: 0, // Disable mongoose buffering
      bufferCommands: false, // Disable mongoose buffering
    });
    
    return cachedConnection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

// Input validation
function validateContactRequest(body) {
  const errors = [];
  
  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('Valid email is required');
  }
  
  if (!body.message || typeof body.message !== 'string' || body.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  
  if (body.subject && typeof body.subject !== 'string') {
    errors.push('Subject must be a string');
  }
  
  return errors;
}

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ 
      success: false, 
      error: 'Method not allowed. Only POST requests are accepted.' 
    });
    return;
  }

  try {
    // Connect to database
    await connectToDatabase();
    
    // Validate input
    const validationErrors = validateContactRequest(req.body);
    if (validationErrors.length > 0) {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: validationErrors
      });
      return;
    }
    
    // Sanitize input
    const sanitizedData = {
      name: req.body.name.trim(),
      email: req.body.email.trim().toLowerCase(),
      subject: req.body.subject ? req.body.subject.trim() : 'General Inquiry',
      message: req.body.message.trim(),
      createdAt: new Date()
    };
    
    // Create and save contact request
    const contactRequest = new ContactRequest(sanitizedData);
    await contactRequest.save();
    
    // Success response
    res.status(201).json({
      success: true,
      message: 'Contact request submitted successfully',
      id: contactRequest._id
    });
    
  } catch (error) {
    console.error('Contact request error:', error);
    
    // Handle specific MongoDB errors
    if (error.name === 'ValidationError') {
      res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: Object.values(error.errors).map(err => err.message)
      });
      return;
    }
    
    if (error.code === 11000) {
      res.status(409).json({
        success: false,
        error: 'Duplicate entry',
        message: 'A contact request with this email already exists'
      });
      return;
    }
    
    // Generic server error
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to submit contact request'
    });
  }
};
