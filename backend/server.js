require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const joinRoutes = require('./routes/join');
const contactRoutes = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

if (!mongoUri) {
    console.error('Missing MongoDB connection string. Set MONGO_URI (or MONGODB_URI) in your .env');
    process.exit(1);
}

mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

app.use('/api/join', joinRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
