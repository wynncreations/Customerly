var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));



//turn on server
app.listen("3000", "localhost", function () {
    console.log("SocialSquared Sociably Connected");
});