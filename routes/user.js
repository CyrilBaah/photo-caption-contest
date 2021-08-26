const express = require('express');
const router = express.Router();
const userController = require('../controller/api/user');

router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getUsers);
router.put('/api/users/:id', userController.updateUser);


module.exports = router;