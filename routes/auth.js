const express = require("express");
var router = express();

const middleware = require("../middleware");
const passport = require("passport");
const redditStrat = require("passport-reddit");