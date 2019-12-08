const EmailValidator = require('email-validator');
const Hash = require('../hash');
const Model = require('./users.model.js');


const {
  buildMakeUser, buildDeleteUser, buildFindUser, buildUpdateUser,
} = require('./users.build.js');

const SubscriptionTimeValidator = Object.freeze({
  validate: (time) => {
    if (!(time instanceof Number)) {
      return false;
    }
    if (time === 1 || (time < 25 && time > 0 && time !== 18 && time % 6 === 0)) {
      return true;
    }
    return false;
  },
});

const deleteUser = buildDeleteUser({ Model });

const findUser = buildFindUser({ Model });

const updateUser = buildUpdateUser({ Model, EmailValidator, SubscriptionTimeValidator });

const makeUser = buildMakeUser({
  Hash, EmailValidator, Model, SubscriptionTimeValidator,
});


module.exports = {
  makeUser, deleteUser, findUser, updateUser, SubscriptionTimeValidator,
};
