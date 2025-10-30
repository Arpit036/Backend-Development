const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
});

// Dynamic Route
app.get("/Profile/:arpit", function(req, res){
    res.render(req.params.arpit);
     
});

app.listen(3000, function(){
    console.log("its running")
});
