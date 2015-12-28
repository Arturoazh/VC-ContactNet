(function() {
  'use strict';

  angular
    .module('virtual-center')
    .directive('cnNavigate', directive)
    .service('$cnNavigate', service);


  /* @ngInject */
  function directive($cnNavigate) {
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

      console.log('asdgasdg');

      function elementClick(){
        $cnNavigate.path(attr.cnNavigate);
        scope.$apply();
      }

    }

  }//End directive

  /* @ngInject */
  function service($location){

    var scope = this;

    scope.path = path;

    function path(){
      if(!arguments[0])
        return;
      // var body = document.body
      // if(!body.classList.contains('disable-hover'))
      //   body.classList.add('disable-hover');

      $location.path(arguments[0]);      
    } 

  }

}());