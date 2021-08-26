const express = require('express');
const router = express.Router();
const userController = require('../controller/api/user');

router.post('/api/users', userController.createUser);

module.exports = router;