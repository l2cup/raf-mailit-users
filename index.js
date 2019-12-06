const users = require('./users');

const user = users.makeUser({
  username: 'uros', password: 'nikolic', email: 'nikolic.uros@me.com', subscriptions: [1, 2], initialSubscriptionTime: 1,
});
console.log(user);
