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

  function removePicture(id) {
    return $http.delete('/api/gallery/remove/' + id)
    .then(function(response) {
      console.log(response.data);
      fetchAllPicturesInfo();
    });
  }

  return {
    fetchAllPicturesInfo: fetchAllPicturesInfo,
    getAllPicturesInfo: getAllPicturesInfo,
    removePicture: removePicture
  };

}
