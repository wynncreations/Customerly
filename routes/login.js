var express     = require("express");
var passport    = require("passport");
var router      = express.Router({
    mergeParams: true
});

 router.get("/login",function(req,res){
     res.render("login");
 });

router.post("/login", passport.authenticate("local", {
                successRedirect: "/",
                failureRedirect: "/login"
            }),function(req,res){
});


module.exports = router;