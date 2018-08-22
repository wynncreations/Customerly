var express = require("express");
var User = require("../models/user");
var passport = require("passport");
var passport = require("passport");

var router = express.Router({
    mergeParams: true
});

router.get("/register",function(req,res){
    res.render("register");
});

//User is registering.
router.post("/register",function(req,res){
    //check for a user, if one found, redirect with already in use error.
    var newUser = new User({username: req.body.user.email});
    User.findOne({username: req.body.user.email},function(err,user){
        //did we find anything?
        if(user){
            //found a user, redirect.
            res.redirect("/register");
        }else{

            passport.use(new LocalStrategy(newUser.authenticate()));
            passport.serializeUser(newUser.serializeUser());
            passport.deserializeUser(newUser.deserializeUser());


            newUser.save(newUser,function(err){
                passport.authenticate("local")(req, res, function (err) {
                    req.flash("success", "Successfully logged in, " + newUser.username);
                    res.redirect("/landing");
                });
            });
        }
    });
});




module.exports = router;