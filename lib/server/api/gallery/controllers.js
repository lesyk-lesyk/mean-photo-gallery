var mongoose = require("mongoose");
var Picture = mongoose.model('Picture');

exports.add = function (req, res) {
  Picture.add('testName', 'testPath', function(err){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.remove = function (req, res) {
  Picture.remove(req.query.id, function(err){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.pictures = function (req, res) {
  Picture.getAllPictures(function(err, data){
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(data);
  });
};
