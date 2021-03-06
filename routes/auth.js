const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private!
router.get('/', auth, async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);   
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
        
    }
});

// @router  POST api/auth
// @desc    Auth user & get token (login)
// @access  Public   
router.post('/',
 [
     check('email', 'Please enter an email').isEmail(),
     check('password', 'Password is required').exists()
 ],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (!user) {
            res.status(400).json({ msg: 'Invalid Credentials' });
        }
        // Email has been verified
        let isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({ msg: 'Invalid Credentials' });
        }
        // Password has been verified

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn: 360000
            },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }

}); 

module.exports = router;