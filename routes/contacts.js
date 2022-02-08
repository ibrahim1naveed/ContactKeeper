const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const { check, validationResult} = require('express-validator');

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
router.post('/', 
[ 
    auth, 
    [
    check('name', 'Name is required')
        .not()
            .isEmpty()
    ]
],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        
    }
    const { name, email, phone, type} = req.body;

    try {
        let contactCheck = await Contact.findOne({ phone: phone });
        if (contactCheck) {
            res.status(400).json( { msg: 'Contact already exists' });
        }

        const newContact = new Contact({
            name, 
            email, 
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();
        res.json(contact);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }
}); 

// @router  PUT api/contacts/:id
// @desc    Update an existing contact
// @access  Private   
router.put('/:id', auth, async (req,res) => {
    const { name, email, phone, type } = req.body;

    const contactFields = {};
    if (name) contactFields.name = name;
    if (email) contactFields.email = email;
    if (phone) contactFields.phone = phone;
    if (type) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404).json({ msg: 'Contact not found!' });
        }
        // Make sure that the user is not accessing someone elses contacts
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }
        contact = await Contact.findByIdAndUpdate(req.params.id,
            { $set: contactFields },
            { new: true}
        );

        res.json(contact);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }
    
}); 

// @router  DELETE api/contacts/:id
// @desc    Delete an existingcontact
// @access  Private   
router.delete('/:id', auth, async (req,res) => {

    try {
        let contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({ msg: 'Contact not found!' });
        }
        // Make sure that the user is not accessing someone elses contacts
        if (contact.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        await Contact.findByIdAndRemove(req.params.id);
        res.send('Contact Removed!');

        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
    
}); 

module.exports = router;