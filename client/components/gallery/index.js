var angular = require('angular');
var ngRoute = require('angular-route');
var GalleryFactory = require('./gallery.factory');
var GalleryComponent = require('./gallery.component');

module.exports = 'photoGallery.gallery';

angular.module('photoGallery.gallery', [
  ngRoute
]).
config(RouteConfig).
factory('Gallery', GalleryFactory).
component('gallery', GalleryComponent);

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider) {
  $routeProvider.when('/', {
    template: '<gallery></gallery>'
  });
}
