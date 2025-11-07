const express = require('express')
const app  = express()
const userModel = require("./models/user")
const postModel = require("./models/posts")

app.get("/", (req, res)=>{
    res.send("hey")
    
})

app.get("/create", async function(req, res){
   let user = await userModel.create({
        username: "Arpit",
        age: 22,
        email: "arpitvermaji22@gmail.com"
    })
    res.send(user);
})

app.listen(3000);