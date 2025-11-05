const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', function(req, res){
    res.send("hey");
})
 

app.get('/create', function(req, res){
     const createdUser = userModel.create({
        name : "Arpit",
        email: "arpitji784@gmail.com",
        username: "arpit_036"

     })

     
    res.send(createdUser);
})





app.listen(3000);