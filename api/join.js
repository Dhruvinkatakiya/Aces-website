const mongoose = require('mongoose');
const JoinRequest = require('../backend/models/JoinRequest');

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
function validateJoinRequest(body) {
  const errors = [];
  
  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  if (!body.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('Valid email is required');
  }
  
  if (!body.year || !['1st', '2nd', '3rd', '4th'].includes(body.year)) {
    errors.push('Valid year (1st, 2nd, 3rd, 4th) is required');
  }
  
  if (!body.branch || typeof body.branch !== 'string' || body.branch.trim().length < 2) {
    errors.push('Branch must be at least 2 characters long');
  }
  
  if (!body.interests || !Array.isArray(body.interests) || body.interests.length === 0) {
    errors.push('At least one interest must be selected');
  }
  
  if (body.experience && typeof body.experience !== 'string') {
    errors.push('Experience must be a string');
  }
  
  if (body.motivation && typeof body.motivation !== 'string') {
    errors.push('Motivation must be a string');
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
    const validationErrors = validateJoinRequest(req.body);
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
      year: req.body.year,
      branch: req.body.branch.trim(),
      interests: req.body.interests.map(interest => interest.trim()),
      experience: req.body.experience ? req.body.experience.trim() : '',
      motivation: req.body.motivation ? req.body.motivation.trim() : '',
      createdAt: new Date()
    };
    
    // Create and save join request
    const joinRequest = new JoinRequest(sanitizedData);
    await joinRequest.save();
    
    // Success response
    res.status(201).json({
      success: true,
      message: 'Join request submitted successfully',
      id: joinRequest._id
    });
    
  } catch (error) {
    console.error('Join request error:', error);
    
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
        message: 'A join request with this email already exists'
      });
      return;
    }
    
    // Generic server error
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: 'Failed to submit join request'
    });
  }
};
