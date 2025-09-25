const mongoose = require('mongoose');
const { createApp, connectMongo } = require('../backend/server');

let app;

module.exports = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      await connectMongo();
    }
    if (!app) app = createApp();
    return app(req, res);
  } catch (err) {
    res.statusCode = 500;
    res.end(`Server error: ${err.message}`);
  }
};
