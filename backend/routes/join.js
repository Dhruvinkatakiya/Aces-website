const express = require('express');
const JoinRequest = require('../models/JoinRequest');
const router = express.Router();

// Submit join request (public)
router.post('/', async (req, res) => {
    try {
        const joinReq = new JoinRequest(req.body);
        await joinReq.save();
        res.json({ msg: 'Join request submitted successfully.' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error.' });
    }
});

module.exports = router;
