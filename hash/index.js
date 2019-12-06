const bcrypt = require('bcrypt');

const saltRounds = 10;

const Hash = Object.freeze({
  hash: async (password) => bcrypt.hash(password, saltRounds),
  checkPassword: async (password, hashValue) => bcrypt.compare(password, hashValue),
});

module.exports = Hash;
