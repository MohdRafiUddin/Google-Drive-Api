const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
   driveID : string
 });

mongoose.model('users', 'userSchema')
