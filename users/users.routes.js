const userService = require('./users.service.js');
const Hash = require('../hash/');
/**
 * GET request for all users
 */
async function getUsersAll(req, res, next) {
  try {
    const users = await userService.findAll();
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
    console.log(`${req.params.subscriptionTime}`);
    const user = await userService.findAll({ subscriptionTime: `${req.params.subscriptionTime}` });
    res.json(user);
  } catch (err) {
    next(err);
  }
}

async function getUserSubscriptions(req, res, next) {
  try {
    const user = await userService.findUser({ username: `${req.params.username}` });
    res.json(user.subscriptions);
  } catch (err) {
    next(err);
  }
}

async function login(req, res, next) {
  try {
    const user = await userService.findUser({ username: `${req.body.username}` });
    if (!user) {
      res.redirect('/register');
    }


    const valid = await Hash.checkPassword(`${req.body.password}`, user.password);
    if (!valid) {
      next(new Error('User not registered'));
    }
    res.json(valid);
  } catch (err) {
    next(err);
  }
}

async function register(req, res, next) {
  try {
    const user = await userService.findUser({ username: `${req.body.username}` });
    if (user) {
      next(new Error('User already registered'));
    }

    console.log(req.body.username);
    console.log(typeof req.body.username);
    const newUser = await userService.makeUser({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      subscriptions: req.body.subscriptions,
      subscriptionTime: Number.parseInt(req.body.subscriptionTime),
    });

    newUser.save();
    res.json(newUser);
  } catch (err) {
    next(err);
  }
}


module.exports = {
  getUsersAll, getUsersBySubscriptionTime, getUserSubscriptions, login, register,
};
