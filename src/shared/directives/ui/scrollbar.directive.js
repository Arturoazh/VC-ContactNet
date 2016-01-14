'use strict';

var Ps = require('perfect-scrollbar');

// @ngInject
module.exports = function scrollbarDirective($timeout) {

  return {
    link: link,
    restrict: 'A',
    scope: '@'
  };

  function link(scope, element, attrs) {
    var elem       = element;
    var autoScroll = attrs.autoScroll;


    var params = {
      suppressScrollX: attrs.suppressScrollX || false,
      scrollTop: (autoScroll || !attrs.autoTop) ? scrollPosition() : 0
    };

    if (typeof(attrs.lengthScrollAuto) === 'undefined') params.minScrollbarLength = 100;

    Ps.initialize(elem[0], params);

    attrs.$observe('scrollbarDirective',
      function handler() {
        if (autoScroll) elem.context.scrollTop = (attrs.autoTop) ? 0 : scrollPosition();
        Ps.update(elem[0]);
      }
    );

    attrs.$observe('autoScroll',
      function handler() {
        // INFO: $observe is faster than ngRepeat
        $timeout(function () {
          elem.context.scrollTop = (attrs.autoTop) ? 0 : scrollPosition();
          Ps.update(elem[0]);
        }, 100);
      }
    );

    function scrollPosition(){
      var children = element.children();
      if(children.length > 3) {
        return children[children.length - 3].offsetTop;
      }
      return 0;
    }
  }
};
