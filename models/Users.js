const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
username: String,
message: String
})

const user = mongoose.model('User', userSchema,)

module.exports = user;