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


const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000);