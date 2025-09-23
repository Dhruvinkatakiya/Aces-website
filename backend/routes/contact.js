const express = require('express');
const ContactRequest = require('../models/ContactRequest');
const router = express.Router();

// Submit contact request (public)
router.post('/', async (req, res) => {
    try {
        const contactReq = new ContactRequest(req.body);
        await contactReq.save();
        res.json({ msg: 'Contact request submitted successfully.' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error.' });
    }
});

module.exports = router;
