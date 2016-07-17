var fs = require('fs');

module.exports = {
  controller: GalleryController,
  template: fs.readFileSync(__dirname + '/gallery.component.html', 'utf-8')
};

GalleryController.$inject = ['Gallery'];
function GalleryController(Gallery) {
  var $ctrl = this;
  
  console.log(Gallery.testFactory());

  $ctrl.testCtrl = function () {
    console.log('testCtrl');
  };
}
