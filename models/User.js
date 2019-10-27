const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  userId: String,
  message: String,
  date: String,
  name: String,
  starCount: String

})



const user = mongoose.model('User', userSchema)





// module.exports = starUser;
module.exports = user;