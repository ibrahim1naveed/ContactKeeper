const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all of a user's contacts
// @access  Private
router.get('/', (req,res) => {
    res.send("Get logged in user")
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