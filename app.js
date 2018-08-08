var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
    res.send("SocialSquare - Coming Soon!");
});

//turn on server
app.listen("3000", "localhost", function () {
    console.log("SocialSquared Sociably Connected");
});