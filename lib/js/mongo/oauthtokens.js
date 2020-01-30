const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Oauthtokens = Schema({
  user_identifier: String,
  access_token: String,
  refresh_token: String,
  expires_in: Number
});

module.exports = mongoose.model('oauthtokens', Oauthtokens);
