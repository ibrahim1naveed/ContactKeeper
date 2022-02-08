const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

// @route   GET api/contacts
// @desc    Get all of a user's contacts
// @access  Private
router.get('/', auth, async (req,res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
        
    }

});

// @router  POST api/contacts
// @desc    Add a new contact
// @access  Private   
router.post('/', (req,res) => {
    res.send("Add new contact")
}); 

// @router  PUT api/contacts/:id
// @desc    Update an existing contact
// @access  Private   
router.put('/:id', (req,res) => {
    res.send("Update contact")
}); 

// @router  DELETE api/contacts/:id
// @desc    Delete an existingcontact
// @access  Private   
router.delete('/:id', (req,res) => {
    res.send("Delete contact")
}); 

module.exports = router;