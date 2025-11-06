const cookieParser = require('cookie-parser');
const express = require('express')
const app = express()
app.use(cookieParser())

app.get("/", function(req, res){
    // cookies set
    res.cookie("name", "arpit");
    res.send("done");
})


app.get("/read", function(req, res){
    console.log(req.cookies);
    res.send("done");
})


app.listen(3000);