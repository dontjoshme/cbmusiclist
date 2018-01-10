const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  username: String,
  password: { type: String, select: false },
  // select:false - dont return unless explicity asked to do so
  firstName: String,
  lastName: String,
  email: String,
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
