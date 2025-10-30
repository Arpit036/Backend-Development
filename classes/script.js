// const fs = require('fs')

// fs.writeFile('hey.txt', "hey hello kaise ho", function(err) {
//    if(err) console.log(err);
//     else console.log("done");
// })

// fs.appendFile('hey.txt', " mai to accha hun", function(err) {
//    if(err) console.log(err);
//     else console.log("done");
// })


// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.log(err)
//         else console.log("done")
// })

// fs.copyFile("hello.txt", "./copy/copy.txt", function(err){
//     if(err) console.log(err)
//         else console.log(done)
// })

// fs.unlink("hello.txt", function(err){
//     if(err) console.log(err)
//         else console.log(removed)
// })


// const http = require('http');

// const server = http.createServer(function(req, res){
//     res.end("hello world");
// })

// server.listen(3000);





//  express .js
const express = require('express')
const app = express();

app.use(function(req, res, next){
      console.log("middleware chla")
      next();
})

app.get('/', function(req, res){
    res.send("hello world");
})

app.get('/profile', function(req, res){
     res.send("profile section")
})



app.listen(3000)



 