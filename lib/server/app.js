var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client-build'));
app.use('/uploads',  express.static(__dirname + '/uploads'));

require('./db');

var api = require('./api');
app.use('/api', api);

module.exports = app;
