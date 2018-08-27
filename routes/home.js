var express = require("express");
var passport = require("passport");
var middleware = require("../middleware");

var router = express.Router({
    mergeParams: true
});

router.get("/",middleware.isLoggedIn,function (req, res,next) {
    //console.log(req.user.initialStep);
    if (!req.user.initialCompleted) {
        //console.log(req.user.initialCompleted);
        res.render("account");
    }else{
        //console.log(process.env);
        res.render("landing");
    }

    
});


module.exports = router;