const mongoose = require('mongoose');

const loginLogSchema = new mongoose.Schema({
    email: { type: String, required: true },
    loginTime: { type: Date, default: Date.now },
    logoutTime: { type: Date },
    ip: String,
    userAgent: String
});

module.exports = mongoose.model('LoginLog', loginLogSchema);
