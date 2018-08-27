var express = require("express");
var passport = require("passport");
var middleware = require("../middleware");
var User = require("../models/user");
var mongoose = require("mongoose");

var router = express.Router({
    mergeParams: true
});

router.get("/default", middleware.isLoggedIn, function (req,res,next) {
    
    if(req.user.useDefault){
        res.render("default");
    }else{
        //console.log(req.user.useDefault);
        res.render("account");
    }
    

});

router.post("/setdefault", middleware.isLoggedIn, function (req, res, next) {   
    User.findOneAndUpdate({_id: req.user._id},{useDefault:true, initialCompleted:true},{new:true},function(err,doc){
        if (err) {
            console.log("Error setting default: ",err);
            res.redirect("account")
        } else {
            res.redirect("default");
        }
    });
    
});

router.get("/account", middleware.isLoggedIn,function(req,res,next){
    res.render("account");
});

router.get("/",middleware.isLoggedIn,function (req, res,next) {
    //console.log(req.user.initialStep);
    if (!req.user.initialCompleted) {
        //console.log(req.user.initialCompleted);
        res.render("account");
    }else if(req.user.useDefault){
        res.render("default");
    }else{
        //console.log(process.env);
        res.render("landing");
    } 
});




module.exports = router;