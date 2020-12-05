/*const passport       = require('passport');
const User           = require('../models/User');
const TumblrStrategy = require('passport-tumblr').Strategy;
const config         = require('config');



passport.use(new TumblrStrategy({
    consumerKey: TUMBLR_CONSUMER_KEY,
    consumerSecret: TUMBLER_SECRET_KEY,
    callbackURL: 'http://127.0.0.1:3000/auth/tumblr/callback';
},
function(token, tokenSecret, profile, done) {
    User.findOrCreate({ tumblrId: profile.id }, function (err, user) {
        return done(err, user);
    });
}
)); */