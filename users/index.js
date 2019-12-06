const EmailValidator = require('email-validator');
const Id = require('./id.js');
const Hash = require('../hash');

const makeUser = require('./users.js')({ Id, Hash, EmailValidator });

module.exports = { makeUser };
