const express = require('express');
const app = express(); 
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://Vamsi:<password>@cluster0.r2cie.mongodb.net/ContactDb")

app.use("/", require("./routes/contactRoute"))

app.listen(3001, function(){
    console.log("server running on 3001")
})