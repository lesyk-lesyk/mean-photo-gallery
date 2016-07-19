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

// Clear DB after start. ONLY FOR DEV TESTING!!!!
var pictures = require('./models/pictures');
pictures.find({}).remove(function(err) {
  if (err) {
    console.log(err);
    return;
  }
});

exports.pictures = pictures;
