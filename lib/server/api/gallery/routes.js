var express = require('express');
var router = express.Router();
var ctrlGallery = require('./controllers.js');

router.get('/test', ctrlGallery.test);

module.exports = router;
