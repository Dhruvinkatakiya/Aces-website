const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    googleId: { type: String, unique: true },
    picture: String,
    branch: { type: String },
    year: { type: String },
    firstLoginDate: { type: Date, default: Date.now },
    lastLoginDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
