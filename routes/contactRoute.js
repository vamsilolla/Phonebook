const express = require('express');
const router = express.Router();
const Contact = require("../models/contactmodel");


router.route("/create").post((req,res) =>{
    const name = req.body.name;
    const number = req.body.number;
    const address = req.body.address; 
    const newContact = new Contact({
        name, 
        number, 
        address
    })
    newContact.save(); 
})

router.route("/contact").get((req,res)=> {
    Contact.find()
    .then(foundContact => res.json(foundContact))
})
module.exports = router; 