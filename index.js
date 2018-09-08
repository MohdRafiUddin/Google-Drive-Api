const express = require('express');
const passport = require('passport');
const GoogleDriveStrategy = require('passport-google-drive').Strategy;
app = express();
const Keys = require('./config/keys.js');

passport.use(
    new GoogleDriveStrategy(
     {
       clientID: Keys.DRIVE_CLIENT_ID,
       clientSecret: Keys.DRIVE_CLIENT_SECRET,
       callbackURL: '/auth/google-drive/callback'
      },
      (accessToken, refreshToken, profile, done) => {
         console.log(accessToken);
       }
     )
   );

app.get('/auth/google-drive', passport.authenticate('google-drive', {scope : 'https://www.googleapis.com/auth/drive.readonly'}));

app.get('/auth/google-drive/callback', passport.authenticate('google-drive'));


const PORT = process.env.PORT || 5000;
app.listen(PORT);
