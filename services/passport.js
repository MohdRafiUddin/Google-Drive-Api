const passport = require('passport');
const GoogleDriveStrategy = require('passport-google-drive').Strategy;
const mongoose = require('mongoose');
const Keys = require('../config/keys.js');
const User = mongoose.model('drive-users');
const prettyjson = require('prettyjson');
const axios = require('axios');

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
       scope : Keys.SCOPE,
       access_type: 'offline'
      },
      (accessToken, refreshToken, profile, done) => {
        console.log(profile);
             User.findOne({driveID : profile.id})
             .then(existingUser => {
               if(existingUser){
                 //Already existing user, don't save in the database.
                  done(null, existingUser);
                }else{
                  //new user, save user id in the database.
                  axios.get('https://www.googleapis.com/drive/v3/files?access_token='+accessToken)
                  .then(res => {
                 new User({
                   driveID : profile.id,
                   name: profile.displayName,
                   email: profile.email,
                   picture: profile.picture,
                   data: res.data.files
                   })
                 .save()
                 .then(user => done(null, user));
                 });
               }
             });
          }
       )
   );
