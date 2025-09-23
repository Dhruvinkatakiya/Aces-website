const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const joinRequestSchema = new mongoose.Schema({
    name: String,
    email: String, // will be encrypted
    branch: String,
    year: String,
    why: String,
    createdAt: { type: Date, default: Date.now }
});

// Encrypt email before saving
joinRequestSchema.pre('save', async function (next) {
    if (this.isModified('email')) {
        const salt = await bcrypt.genSalt(10);
        this.email = await bcrypt.hash(this.email, salt);
    }
    next();
});

module.exports = mongoose.model('JoinRequest', joinRequestSchema);