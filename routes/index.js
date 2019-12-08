const express = require('express');
const user = require('../users/');


const router = express.Router();

router.get('/private/', user.routes.getUsersAll);

router.get('/private/:subscrptionTime', user.routes.getUsersBySubscriptionTime);

module.exports = router;
