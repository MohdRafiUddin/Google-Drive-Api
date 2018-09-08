const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
   driveID: String
 });

mongoose.model('drive-users', userSchema)
