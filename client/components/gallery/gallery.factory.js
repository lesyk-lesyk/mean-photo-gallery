module.exports = GalleryFactory;

GalleryFactory.$inject = ['$http'];
function GalleryFactory($http) {
  var allPicturesInfo = [];

  function fetchAllPicturesInfo () {
    allPicturesInfo = [];
    return $http.get('/api/gallery/pictures')
    .then(function(response) {
      response.data.forEach(function(picture){
        allPicturesInfo.push(picture);
      });
    });
  }

  function getAllPicturesInfo() {
    return allPicturesInfo;
  }

  return {
    fetchAllPicturesInfo: fetchAllPicturesInfo,
    getAllPicturesInfo: getAllPicturesInfo
  };

}
