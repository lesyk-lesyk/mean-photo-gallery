var express = require('express');
var gallery = express();
var galleryRoutes = require('./routes');

gallery.use('/', galleryRoutes);

module.exports = gallery;
