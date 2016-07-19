var mongoose = require( 'mongoose' );
var config = require('../../config');

var DB_URL = config.MONGODB_URI;
mongoose.connect(DB_URL);

mongoose.connection.on('connected', function () { 
 console.log('Mongoose connected to ' + DB_URL); 
}); 

mongoose.connection.on('error', function (err) { 
 console.log('Mongoose connection error: ' + err); 
}); 

mongoose.connection.on('disconnected', function () { 
 console.log('Mongoose disconnected'); 
});

var pictures = require('./models/pictures');

exports.pictures = pictures;
