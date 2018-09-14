const mongoose = require('mongoose');
const Keys = require('../config/keys.js');
const User = mongoose.model('drive-users');
const axios = require('axios');
const requireLogin = require('../middlewares/requireLogin');

//Upload Request Route for User.
module.exports = app => {
  app.post('/api/upload', requireLogin, (req, res) => {
    //Finding User Model by user driveId then fetching accessToken from db and
    //Making POST request to googleapis server.
    User.findOne({driveID : req.body.driveID})
    .then( User =>
       axios.post("https://www.googleapis.com/upload/drive/v3/files?uploadType=media", {
         headers: {
           "Content-Type": req.body.type,
           "Content-Lenght": req.body.size,
           "Authorization": "Bearer "+User.token.accessToken
         }
       })
       .then(response => res.send(response))
       .catch(err => res.send(err))
    );
  });
 }
