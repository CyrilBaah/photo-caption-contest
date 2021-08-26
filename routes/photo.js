const express = require('express');
const router = express.Router();
const photoController = require('../controller/api/photo');

router.post('/api/photos', photoController.createPhoto);
router.get('/api/photos', photoController.getPhotos);
router.put('/api/photos/:id', photoController.updatePhoto);
router.delete('/api/photos/:id', photoController.deletePhoto);


module.exports = router;