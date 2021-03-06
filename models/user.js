const mongoose              = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    initialCompleted: Boolean,
    initialStep: Number,
    redditLink: Boolean,
    facebookLink: Boolean,
    twitterLink: Boolean,
    instagramLink: Boolean,
    useDefault: Boolean
});

UserSchema.index({
    pkey: 1
}, {
    unique: true
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);