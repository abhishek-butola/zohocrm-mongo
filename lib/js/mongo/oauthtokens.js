const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Oauthtokens = Schema({
  useridentifier: String,
  accesstoken: String,
  refreshtoken: String,
  expiresin: Number
});

module.exports = mongoose.model('oauthtokens', Oauthtokens);
