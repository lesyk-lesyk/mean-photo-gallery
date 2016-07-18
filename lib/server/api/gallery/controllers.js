var mongoose = require("mongoose");
var Picture = mongoose.model('Picture');
var upload = require('./upload');

exports.upload = function (req, res) {
   upload(req, res, function(err){
     if(err){
      res.json({error_code:1,err_desc:err});
      return;
    } else {
      Picture.add(req.file.filename, function(err){
        if (err) {
          console.log(err);
          res.json({error_code:1,err_desc:err});
        } else {
          res.json({error_code:0,err_desc:null});
        }
      });
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
    } else {
      res.send(data);
    }
  });
};
