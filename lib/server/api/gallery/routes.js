var express = require('express');
var router = express.Router();
var ctrlGallery = require('./controllers.js');

router.get('/add', ctrlGallery.add);

module.exports = router;
