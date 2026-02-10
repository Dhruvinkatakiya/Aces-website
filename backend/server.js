require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

let isMongoConnected = false;

function createApp() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    // Routes
    app.use('/api/auth', require('./routes/auth'));

    // Simple healthcheck
    app.get('/health', (req, res) => {
        res.json({ ok: true, db: isMongoConnected ? 'connected' : 'disconnected' });
    });

    return app;
}

async function connectMongo() {
    if (isMongoConnected) return;
    const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!mongoUri) {
        throw new Error('Missing MongoDB connection string. Set MONGO_URI (or MONGODB_URI).');
    }
    await mongoose.connect(mongoUri);
    isMongoConnected = true;
    // eslint-disable-next-line no-console
    console.log('MongoDB connected');
}

// Start server only when running locally (node server.js)
if (require.main === module) {
    connectMongo()
        .then(() => {
            const app = createApp();
            const PORT = process.env.PORT || 5000;
            app.listen(PORT, () => console.log(`Server running on ${PORT}`));
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err.message);
            process.exit(1);
        });
}

module.exports = { createApp, connectMongo };
