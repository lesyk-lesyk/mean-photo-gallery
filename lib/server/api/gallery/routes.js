var express = require('express');
var router = express.Router();
var ctrlGallery = require('./controllers.js');

router.post('/upload', ctrlGallery.upload);
router.get('/remove', ctrlGallery.remove);
router.get('/pictures', ctrlGallery.pictures);

module.exports = router;
