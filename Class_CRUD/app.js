const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', function(req, res){
    res.send("hey");
})

app.get('/create', function(req, res){
    res.send("hey");
})

app.listen(3000);