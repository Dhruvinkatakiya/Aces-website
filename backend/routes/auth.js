const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const LoginLog = require('../models/LoginLog');
const auth = require('../middleware/auth'); // Import middleware
const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Verify Google Token Middleware
const verifyGoogleToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        return ticket.getPayload();
    } catch (error) {
        throw new Error('Invalid Google Token');
    }
};

// Google Login
router.post('/google-login', async (req, res) => {
    const { token } = req.body;

    try {
        const payload = await verifyGoogleToken(token);
        const { email, name, sub: googleId, picture } = payload;

        // Check domain
        if (!email.endsWith('@nirmauni.ac.in')) {
            return res.status(403).json({ msg: 'Only Nirma University students can log in.' });
        }

        let user = await User.findOne({ email });
        let isNewUser = false;

        if (!user) {
            user = new User({
                email,
                name,
                googleId,
                picture,
                firstLoginDate: new Date()
            });
            await user.save();
            isNewUser = true;
        } else {
            // Update user details if needed
            user.lastLoginDate = new Date();
            user.picture = picture; // Update picture if changed
            await user.save();
        }

        // Create Login Log
        const loginLog = new LoginLog({
            email,
            loginTime: new Date(),
            ip: req.ip,
            userAgent: req.get('User-Agent')
        });
        await loginLog.save();

        // Generate JWT
        const sessionToken = jwt.sign(
            { user: { id: user.id, email: user.email } },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token: sessionToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                picture: user.picture,
                branch: user.branch,
                year: user.year
            },
            isNewUser,
            loginLogId: loginLog._id
        });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Update User Details (Branch/Year)
// Protected route using 'auth' middleware
router.post('/update-profile', auth, async (req, res) => {
    const { branch, year } = req.body;
    
    try {
        // req.user is set by the auth middleware
        let user = await User.findById(req.user.id);
        
        if (!user) return res.status(404).json({ msg: 'User not found' });

        user.branch = branch;
        user.year = year;
        await user.save();

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Logout
router.post('/logout', async (req, res) => {
    const { loginLogId } = req.body;
    
    if (loginLogId) {
        try {
            await LoginLog.findByIdAndUpdate(loginLogId, { logoutTime: new Date() });
        } catch (err) {
            console.error('Error updating logout time:', err);
        }
    }
    
    res.json({ msg: 'Logged out successfully' });
});

// Get Current User
// Protected route using 'auth' middleware
router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
