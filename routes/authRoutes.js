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

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
 }
