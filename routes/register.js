var express = require("express");
var User = require("../models/user");
var mongoose = require("mongoose");
var router = express.Router({
    mergeParams: true
});


router.get("/register",function(req,res,next){
    res.render("register");
});

    router.post("/register", function (req, res) {
        //console.log(req.body.username + " " + req.body.password);
        var newUser = new User({
            username: req.body.username
        });
        User.register(newUser, req.body.password, function (err, user) {
            if (err) {
                req.flash("error", err.message);
                return res.render("register");
            }
            passport.authenticate("local")(req, res, function (err) {
                req.flash("success", "Successfully logged in, " + req.body.username);
                res.redirect("/");
            });
        });
    });

module.exports = router;