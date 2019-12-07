const EmailValidator = require('email-validator');
const Hash = require('../hash');
const Model = require('./users.model.js');
const routes = require('./users.routes.js');


const {
  buildMakeUser, buildDeleteUser, buildFindUser, buildUpdateUser,
} = require('./users.build.js');

const makeUser = buildMakeUser({
  Hash, EmailValidator, Model,
});
const deleteUser = buildDeleteUser({ Model });

const findUser = buildFindUser({ Model });

const updateUser = buildUpdateUser({ Model, EmailValidator });


module.exports = {
  makeUser, deleteUser, findUser, updateUser, routes,
};
