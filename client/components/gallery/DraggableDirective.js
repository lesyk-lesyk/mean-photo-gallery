// DraggableDirective.js
var Draggable = function () {

  return {
    restrict: "A",
    link: function(scope, element, attributes, ctlr) {
      element.attr("draggable", true);

      element.bind("dragstart", function(eventObject) {
        eventObject.dataTransfer.setData("id", attributes.itemid);
      });
    }
  };
};

module.exports = Draggable;
