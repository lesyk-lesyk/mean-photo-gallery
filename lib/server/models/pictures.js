var mongoose = require( 'mongoose' );
var config = require('../../../config.js');

var pictureSchema = new mongoose.Schema({
    path: String,
});

pictureSchema.statics.add = function(path, callback) {
  var Picture = this;

  var picture = new Picture({path: path});
  picture.save(function(err, picture) {
    if (err) {
      callback(err);
    } else {
      callback(null, picture);
    }
  });
};

pictureSchema.statics.remove = function(id, callback) {
  var Picture = this;

  Picture.findById(id).remove({}, function(err) { 
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
};

pictureSchema.statics.getAllPictures = function(callback) {
  var Picture = this;
  var allPictures = [];

  Picture.find({}, function (err, pictures) {
    if (err) {
      callback(err);
    } else {
      pictures.forEach(function(picture) {
        allPictures.push({
          id: picture._id, 
          path: config.UPLOAD_REL_PATH + picture.path,
        });
      });
      callback(null, allPictures);
    }
  });
};

module.exports = mongoose.model('Picture', pictureSchema);
