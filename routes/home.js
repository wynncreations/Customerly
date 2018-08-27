var express = require("express");
var passport = require("passport");
var router = express.Router({
    mergeParams: true
});

router.get("/", function (req, res) {
    //check to see if the initial registration is complete, if not, lets route to the account settings page to link an account.
    if(false){
        //res.render("account");
    }else{
        console.log(process.env);
        res.render("landing");
    }  
})


module.exports = router;