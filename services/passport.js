const passport = require('passport');
const GoogleDriveStrategy = require('passport-google-drive').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys.js');
const User = mongoose.model('drive-users');
const prettyjson = require('prettyjson');

passport.serializeUser( (user, done) => {
    done(null, user.id);
});
passport.deserializeUser( (id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
    new GoogleDriveStrategy(
     {
       clientID: Keys.DRIVE_CLIENT_ID,
       clientSecret: Keys.DRIVE_CLIENT_SECRET,
       callbackURL: '/auth/google-drive/callback',
       scope : 'https://www.googleapis.com/auth/drive'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(prettyjson.render(profile));
             User.findOne({driveID : profile.id})
             .then(existingUser => {
               if(existingUser){
                 //Already existing user, don't save in the database.
                  done(null, existingUser);
                }else{
                  //new user, save user id in the database.
                 new User({driveID : profile.id})
                 .save()
                 .then(user => done(null, user));
               }
             });
          }
       )
   );
