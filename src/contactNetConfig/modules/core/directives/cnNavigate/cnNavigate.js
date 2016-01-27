(function() {
  'use strict';

  /* @ngInject */
  module.exports = function ($cnNavigate) {
    var directive = {
        restrict: 'A',
        scope: {
          cnNavigate: '@'
        },
        link: link
    };

    return directive;


    function link(scope, element, attr, ctrl) {

      element.css('cursor', 'pointer');

      element.on('click', elementClick);

      function elementClick(){
        $cnNavigate.path(attr.cnNavigate);
        scope.$apply();
      }

    }

  }//End directive

  

}());