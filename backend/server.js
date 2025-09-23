require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const joinRoutes = require('./routes/join');
const contactRoutes = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/join', joinRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
