const userService = require('./users.service.js');

/**
 * GET request for all users
 */
async function getUsersAll(req, res, next) {
  try {
    const users = await userService.findUser();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

/**
 * GET request for users by subscriptionTime
 */
async function getUsersBySubscriptionTime(req, res, next) {
  try {
    const users = await userService.findUser({ subscriptionTime: `${req.params.subscriptionTime}` });
    res.json(users);
  } catch (err) {
    next(err);
  }
}


module.exports = { getUsersAll, getUsersBySubscriptionTime };
