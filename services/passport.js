const passport = require('passport');
const GoogleDriveStrategy = require('passport-google-drive').Strategy;

const Keys = require('../config/keys.js');

passport.use(
    new GoogleDriveStrategy(
     {
       clientID: Keys.DRIVE_CLIENT_ID,
       clientSecret: Keys.DRIVE_CLIENT_SECRET,
       callbackURL: '/auth/google-drive/callback',
       scope : 'https://www.googleapis.com/auth/drive.metadata.readonly'
      },
      (accessToken, refreshToken, profile, done) => {
         console.log(accessToken);
         console.log(refreshToken);
         console.log(profile);
       }
     )
   );
