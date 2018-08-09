var express = require("express");
var router = express.Router({
    mergeParams: true
});

router.get("/register",function(req,res){
    res.render("register");
});





module.exports = router;