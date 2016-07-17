var mongoose = require("mongoose");
var Picture = mongoose.model('Picture');

exports.add = function (req, res) {
  Picture.add('testName', 'testPath', function(err){
    if (err) {
      console.log(err);
    }
  });
  res.sendStatus(200);
};
