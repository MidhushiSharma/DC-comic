const express = require("express");
const bodyParser = require("body-parser");

const app= express();

app.set('view engine', 'ejs');

app.get("/", function(req,res){
    res.render("index");
});

app.get("/comic1", function(req,res){
    res.render("comic1");
});
app.get("/comic2", function(req,res){
    res.render("comic2");
});
app.get("/comic3", function(req,res){
    res.render("comic3");
});
app.get("/comic4", function(req,res){
    res.render("comic4");
});

app.listen(8080, function(){
    console.log("Server started on the port 8000");
});
