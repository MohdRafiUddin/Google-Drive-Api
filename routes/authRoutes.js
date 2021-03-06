const passport = require('passport');

//Authentication Routes for Users
module.exports = app => {
  app.get(
    '/auth/google-drive',
     passport.authenticate('google-drive',{ accessType: 'offline', approvalPrompt: 'force' }),
   );

  app.get(
    '/auth/google-drive/callback',
     passport.authenticate('google-drive'),
     (req, res) => {
       res.redirect('/Dashboard');
     }
   );

  app.get('/api/current_user', (req, res) => {
    if(req.user){
    res.send({
      driveID: req.user.driveID,
      email: req.user.email,
      name: req.user.name,
      picture: req.user.picture
    });
  } else{
    res.send(req.user);
  }
  });

  app.get('/api/current_user/data', (req, res) => {
    if(req.user){
    res.send({
      data: req.user.data
    });
  } else{
    res.send(req.user);
  }
  })

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
 }
