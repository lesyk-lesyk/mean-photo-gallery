var express = require('express');
var router = express.Router();
var ctrlGallery = require('./controllers.js');

router.get('/add', ctrlGallery.add);
router.get('/remove', ctrlGallery.remove);
router.get('/pictures', ctrlGallery.pictures);

module.exports = router;
