(function() {
  'use strict';

  /* @ngInject */
  module.exports = function ($location){

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