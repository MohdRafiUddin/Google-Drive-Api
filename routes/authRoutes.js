const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google-drive',
     passport.authenticate('google-drive')
   );

  app.get(
    '/auth/google-drive/callback',
     passport.authenticate('google-drive')
   );
 }
