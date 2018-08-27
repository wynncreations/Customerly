var express = require("express");
var passport = require("passport");
var middleware = require("../middleware");


var router = express.Router({
    mergeParams: true
});

router.get("/account",middleware.isLoggedIn,function(req,res){
    //res.render("/account");
});

module.exports = router;