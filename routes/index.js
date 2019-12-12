const express = require('express');
const user = require('../users/');


const router = express.Router();

router.get('/private/', user.routes.getUsersAll);

router.get('/private/:subscriptionTime', user.routes.getUsersBySubscriptionTime);

router.post('/login', user.routes.login);

router.post('/register', user.routes.register);

router.get('/me/:username', user.routes.getUserInformation);

router.get('/me/:username/subscriptions', user.routes.getUserSubscriptions);

router.post('/me/:username/subscriptions', user.routes.postUserSubscriptions);


module.exports = router;
