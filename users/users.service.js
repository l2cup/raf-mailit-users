const EmailValidator = require('email-validator');
const Hash = require('../hash');
const Model = require('./users.model.js');


const {
  buildMakeUser, buildDeleteUser, buildFindUser, buildFindAll, buildUpdateUser,
} = require('./users.build.js');

const SubscriptionTimeValidator = Object.freeze({
  validate: (time) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(time)) {
      return false;
    }
    if (time === 1 || time === 6 || time === 12 || time === 24) {
      return true;
    }
    return false;
  },
});

const deleteUser = buildDeleteUser({ Model });

const findUser = buildFindUser({ Model });

const findAll = buildFindAll({ Model });

const updateUser = buildUpdateUser({ Model, EmailValidator, SubscriptionTimeValidator });

const makeUser = buildMakeUser({
  Hash, EmailValidator, Model, SubscriptionTimeValidator,
});


module.exports = {
  makeUser, deleteUser, findUser, findAll, updateUser, SubscriptionTimeValidator,
};
