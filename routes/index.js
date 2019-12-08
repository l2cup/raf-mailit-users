const express = require('express');
const user = require('../users/');


const router = express.Router();

router.get('/private/', user.routes.getUsersAll);

router.get('/private/:subscriptionTime', user.routes.getUsersBySubscriptionTime);

router.post('/login', user.routes.login);

router.post('/register', user.routes.register);
module.exports = router;
