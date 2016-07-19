var angular = require('angular');
var ngRoute = require('angular-route');
var GalleryFactory = require('./gallery.factory');
var GalleryComponent = require('./gallery.component');
var Draggable = require('./DraggableDirective');
var DropTarget = require('./DropTargetDirective');

module.exports = 'photoGallery.gallery';

angular.module('photoGallery.gallery', [
  ngRoute
]).
config(RouteConfig).
factory('Gallery', GalleryFactory).
component('gallery', GalleryComponent).
directive("ddDraggable", Draggable).
directive("ddDropTarget", DropTarget);

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider) {
  $routeProvider.when('/', {
    template: '<gallery></gallery>'
  });
}
