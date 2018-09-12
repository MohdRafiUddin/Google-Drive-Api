const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
   driveID: String,
   name: String,
   email: String,
   picture: String,
   data: JSON,
   token: {
     accessToken: String,
     refreshToken: String
   }
 });

mongoose.model('drive-users', userSchema)
