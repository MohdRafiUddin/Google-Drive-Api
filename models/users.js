const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
   driveID: String,
   name: String,
   data: JSON
 });

mongoose.model('drive-users', userSchema)
