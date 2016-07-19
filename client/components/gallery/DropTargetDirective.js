// DropTargetDirective.js
var DropTarget= function () {

  return {
    restrict: "A",
    link: function (scope, element, attributes, ctlr) {

      element.bind("dragover", function(eventObject){
        eventObject.preventDefault();
      });

      element.bind("drop", function(eventObject) {
        scope.up.remove(eventObject.dataTransfer.getData("id"));
        eventObject.preventDefault();
      });
    }
  };
};

module.exports = DropTarget;
