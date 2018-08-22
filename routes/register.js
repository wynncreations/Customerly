var express = require("express");
var User = require("../models/user");

var router = express.Router({
    mergeParams: true
});

router.get("/register",function(req,res){
    res.render("register");
});

//User is registering.
router.post("/register",function(req,res){
    //Check if username is already in use
    User.find({email:req.params.email},(err,user)=>{
        if(err){
            console.log("Error connecting to DB: ",err);
        }else{
            if(!user){//No user found. Lets save.
                User.save(req.params.user);
            }else{//Found a user, redirect
                console.log(req.params.user);
                res.redirect(302,"/register");
            }
        }
    });





    //return to registration page with error.

    //If no user by this email, lets add to DB.
});




module.exports = router;