var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local").Strategy,
    methodOverride  = require("method-override");
    User            = require("./models/user");
    flash           = require("connect-flash");
 

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));
require("dotenv").config();

 app.use(flash()); //include flash config so we can do     some messages

 var options = {
     useNewUrlParser: true
 };
  //Passort config
  app.use(require("express-session")({
      secret: "omg yes please work!",
      resave: false,
      saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());


 app.use(function (req, res, next) {
     //console.log(req.user);
     res.locals.currentUser = req.user;
     res.locals.error = req.flash("error");
     res.locals.success = req.flash("success");
     next();
 });

mongoose.connect(process.env.DEVURL, options, function () {
    //mongoose.connection.db.dropDatabase();
});

//Connection to db.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
});



// var commentRoutes = require("./routes/comments"),
//     campgroundRoutes = require("./routes/campgrounds"),
//     indexRoutes = require("./routes/index");

var registerRoutes = require("./routes/register");
app.use(registerRoutes);
var loginRoutes = require("./routes/login");
app.use(loginRoutes);
var homeRoutes = require("./routes/home");
app.use(homeRoutes);
var accountRoutes = require("./routes/account");
app.use(accountRoutes);





//turn on server
app.listen("3000", "localhost", function () {
    console.log("SocialSquared Sociably Connected");
});