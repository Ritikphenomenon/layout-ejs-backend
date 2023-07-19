const express=require('express');
const bodyparser=require('body-parser');

var app =express();


app.set("view engine","ejs");

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render("home");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(4000,function(){
    console.log("server started");
});