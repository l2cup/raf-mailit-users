const bcrypt = require('bcrypt');

const saltRounds = 10;

const Hash = Object.freeze({
  hash: (password) => bcrypt.hash(password, saltRounds),
  checkPassword: (password, hashValue) => bcrypt.compare(password, hashValue),
});
module.exports = Hash;
