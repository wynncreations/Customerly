var express = require("express"),
    expressSession = require("express-session");
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override");

require("dotenv").config();
    

app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
    res.render("landing");
});

// var commentRoutes = require("./routes/comments"),
//     campgroundRoutes = require("./routes/campgrounds"),
//     indexRoutes = require("./routes/index");

var registerRoutes = require("./routes/register");
app.use(registerRoutes);

var options = {
    useNewUrlParser: true
};

// mongoose.connect(process.env.DBPRODURL, options, function () {
//     //mongoose.connection.db.dropDatabase();
// });

//Connection to db.
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//     // we're connected!
// });
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));

// app.use(flash()); //include flash config so we can do     some messages

//seedDB();
//Passort config
app.use(require("express-session")({
    secret: "omg yes please work!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
 //passport.use(new LocalStrategy(User.authenticate()));
 //passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//turn on server
app.listen("3000", "localhost", function () {
    console.log("SocialSquared Sociably Connected");
});