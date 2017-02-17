var mongoose = require('mongoose');

// For more info about schema's visit
// http://mongoosejs.com/docs/guide.html

var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

module.exports = mongoose.model('User', UserSchema);