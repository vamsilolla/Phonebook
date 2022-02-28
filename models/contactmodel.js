const mongoose= require("mongoose");

const contactSchema = {
    name: String, 
    address: String,
    number: String 
    
}

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact; 
