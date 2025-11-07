const express = require('express')
const app  = express()
const userModel = require("./models/user")
const postModel = require("./models/post")

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


app.get("/post/create", async function(req, res){
    let post = await postModel.create({
        postdata: "hello sare kaise ho",
        user: "690e1d5ae4de169054f2c060"
    })
    
   let user = await userModel.findOne({_id : "690e1d5ae4de169054f2c060"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user})

})

app.listen(3000);