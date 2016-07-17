module.exports = GalleryFactory;

GalleryFactory.$inject = ['$http'];
function GalleryFactory($http) {
 
  function testFactory () {
    return 'testFactory';
  }

  return {
    testFactory: testFactory
  };

}
