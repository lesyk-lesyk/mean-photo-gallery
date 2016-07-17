var express = require('express');
var api = express();

var gallery = require('./gallery');
api.use('/gallery', gallery);

module.exports = api;
