var app = require('./app');
var server = require('http').createServer(app);
var config = require('../../config');

var port = config.PORT || 8080;

server.listen(port, function() {
  console.log("Server listening on port "+ port +"...");
});
