const express = require('express');
const router = express.Router();
const photoController = require('../controller/api/photo');

router.post('/api/photos', photoController.createPhoto);


module.exports = router;