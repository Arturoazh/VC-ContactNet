'use strict';

// @ngInject
module.exports = function ngDraggableDirective($document) {
  return {
    link: link,
    restrict: 'A'
  };
  function link(scope, element, attrs) {
    var el = (typeof(attrs.elementDrag) !== 'undefined') ? angular.element(element).find(attrs.elementDrag) : element;

    //no element no create
    if (el.length === 0) return false;
    var startX       = 0, startY = 0, limitLeft = 0,
        x            = el[0].getBoundingClientRect().left, y = el[0].getBoundingClientRect().top,
        height       = el[0].offsetHeight, width = el[0].offsetWidth;
    var comments     = angular.element(element).find('.comment');
    var windowHeight = document.documentElement.offsetHeight;
    var windowWidth  = document.documentElement.offsetWidth;
    var limitBottom  = document.documentElement.offsetHeight - height;
    var limitRight   = document.documentElement.offsetWidth - width;
    var tools;

    scope.$applyAsync(init);
    element.on('mouseup', function (event) {
      element.css({
        cursor: 'default'
      });
      $document.unbind('mousemove', mousemove);
      $document.unbind('mouseup', mouseup);
    });

    element.on('mousedown', function (event) {
      // Prevent default dragging of selected content
      if (event.ctrlKey === false) {
        setZIndex(85);
        element.css({
          zIndex: 90,
          cursor: 'move'
        });
        event.preventDefault();
        x      = el[0].getBoundingClientRect().left;
        startX = event.pageX - x;

        startY = event.pageY - y;
        $document.on('mousemove', mousemove);
        $document.on('mouseup', mouseup);
      }
    });

    function mousemove(event) {
      y = event.pageY - startY;
      x = event.pageX - startX;

      windowHeight = document.documentElement.offsetHeight;
      limitBottom  = windowHeight - height;
      windowWidth  = document.documentElement.offsetWidth;
      limitRight   = document.documentElement.offsetWidth - width;
      limitLeft    = (comments.hasClass('show')) ? 200 : 0;
      if (y <= 0) y = 0;
      if (y > limitBottom) y = limitBottom;
      if (x < limitLeft) x = limitLeft;
      if (x > limitRight) x = limitRight;
      element.css({
        top: y + 'px',
        left: x + 'px'
      });
    }

    function mouseup() {
      $document.unbind('mousemove', mousemove);
      $document.unbind('mouseup', mouseup);
    }

    function setZIndex(zIndex) {
      tools = document.getElementsByClassName('channelTool');
      for (var t = 0; t < tools.length; t++) {
        angular.element(tools[t]).css({
          zIndex: zIndex
        });
      }
    }

    function init() {
      var inputs = document.getElementsByTagName('input');
      for (var t = 0; t < inputs.length; t++) {
        angular.element(inputs[t]).on('mousedown', function (event) {
          event.stopPropagation();
        });
      }
      var textareas = document.getElementsByTagName('textarea');
      for (var p = 0; p < textareas.length; p++) {
        angular.element(textareas[p]).on('mousedown', function (event) {
          event.stopPropagation();
        });
      }
    }

  }
};
