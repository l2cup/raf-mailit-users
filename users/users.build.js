function buildMakeUser({
  Hash, EmailValidator, Model, SubscriptionTimeValidator,
}) {
  return async function makeUser({
    username,
    password,
    email,
    subscriptions,
    subscriptionTime,
  } = {}) {
    if (!username) {
      throw new Error('User must have an username.');
    }
    if (!password) {
      throw new Error('User must have a password.');
    }
    if (!email) {
      throw new Error('User must have an email.');
    }
    if (!EmailValidator.validate(email)) {
      throw new Error('User must have a valid email.');
    }
    if (!subscriptionTime) {
      throw new Error('User must choose a subscription time.');
    }
    if (!SubscriptionTimeValidator.validate(subscriptionTime)) {
      throw new Error('Subscription time must be 1, 6, 12 or 24h.');
    }

    const passwordHash = await Hash.hash(password);
    return new Model({
      username,
      password: passwordHash,
      email,
      subscriptions,
      subscriptionTime,
    });
  };
}

function buildDeleteUser({ Model }) {
  return async function deleteUser({ username = undefined, id = undefined } = {}) {
    if (username !== undefined) return Model.remove({ username });
    if (id !== undefined) return Model.remove({ id });
    throw new Error('Did not provide atleast one delete parameter.');
  };
}

function buildFindUser({ Model }) {
  return async function findUser(object) {
    const user = await Model.findOne(object);
    return user;
  };
}

function buildFindAll({ Model }) {
  return async function findAll(object) {
    const users = await Model.find(object);
    return users;
  };
}


function buildUpdateUser({ Model, EmailValidator, SubscriptionTimeValidator }) {
  return async function updateUser(object, updated) {
    // eslint-disable-next-line no-param-reassign
    updated.updatedAt = Date.now();
    if (updated.email !== undefined && !EmailValidator.validate(updated.email)) {
      throw new Error("Can't update. Provided invalid email.");
    }
    if (updated.subscriptionTime !== undefined
      && !SubscriptionTimeValidator.validate(updated.subscriptionTime)) {
      throw new Error("Can't update.Subscription time must be 1, 6, 12 or 24h.");
    }
    return Model.updateOne(object, updated, { runValdiators: true });
  };
}

module.exports = {
  buildMakeUser, buildDeleteUser, buildFindUser, buildFindAll, buildUpdateUser,
};
