module.exports = function buildMakeUsers({
  Id, hash, EmailValidator,
}) {
  return function makeUser({
    username,
    password,
    email,
    subscriptions,
    initialSubscriptionTime,
    createdOn = Date.now(),
    id = Id.makeId(),
  } = {}) {
    if (!Id.validate(id)) {
      throw new Error('Invalid user id.');
    }
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
    if (!initialSubscriptionTime) {
      throw new Error('User must choose a subscription time.');
    }

    let subscriptionTime = initialSubscriptionTime;

    return Object.freeze({
      getUsername: () => username,
      getCreatedOn: () => createdOn,
      getId: () => id,
      passwordHash: () => hash(password),
      getSubscriptions: () => subscriptions,
      addSubscription: (subscription) => subscriptions.push(subscription),
      getSubscriptionTime: () => subscriptionTime,
      changeSubscriptionTime: (time) => {
        if (!(time instanceof Number)) throw new Error('Time not a number.');
        if (time === 12 || time === 24 || time === 6 || time === 3 || time === 1) {
          subscriptionTime = time;
        }
      },

    });
  };
};
