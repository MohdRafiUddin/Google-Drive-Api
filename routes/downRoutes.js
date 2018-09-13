const mongoose = require('mongoose');
const Keys = require('../config/keys.js');
const User = mongoose.model('drive-users');
const axios = require('axios');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/download', requireLogin, (req, res) => {
    User.findOne({driveID : req.body.driveID})
    .then( User =>
       axios.get("https://www.googleapis.com/drive/v3/files/"+req.body.id+"?alt=media", {
         headers: {
           "Authorization": "Bearer "+User.token.accessToken
         }
       })
       .then(response => res.send(response))
       .catch(err => res.send(err))
    );
  });
 }
