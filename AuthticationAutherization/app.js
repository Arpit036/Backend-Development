const express = require('express')
const app = express()


app.get("/", function(req, res){
    // cookies set
    res.cookie("name", "arpit");
    res.send("done");
})


app.listen(3000);