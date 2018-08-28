var express     = require("express");
var passport    = require("passport");
const middlware = require("../middleware");
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

router.get("/logout",middlware.isLoggedIn,(req,res,next)=>{
    req.logout();
    res.redirect("/");
});

module.exports = router;