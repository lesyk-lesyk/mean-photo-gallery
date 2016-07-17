var mongoose = require( 'mongoose' );

var pictureSchema = new mongoose.Schema({
    name: String,
    path: String
});

pictureSchema.statics.add = function(name, path, callback) {
  var Picture = this;
  var picture = new Picture({name: name, path: path});
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

module.exports = mongoose.model('Picture', pictureSchema);
