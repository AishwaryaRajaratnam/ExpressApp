var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminDetailsSchema = new Schema({
  username: String,
  password: String,
  department: String
});

module.exports = mongoose.model('AdminDetails',adminDetailsSchema);
