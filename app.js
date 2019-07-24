var faker = require('faker');
var randomName = faker.name.findName();
var randomNum = faker.random.number();
var randomFileName = faker.system.fileName();

const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("index.html", {"randomName":randomName});
});

app.get("/start", function(req, res){
	res.render("start.html", {"randomFileName":randomFileName});
});

app.get("/development", function(req, res){
	res.render("development.html", {"randomFileName":randomFileName});
});

app.get("/finish", function(req, res){
	res.render("finish.html", {"randomNum":randomNum});
});

//server listener
app.listen("8081", "0.0.0.0", function(){
	console.log("Express Server is running...");
});