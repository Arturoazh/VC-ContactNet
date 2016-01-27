(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnContactNets, $cnCreateContactNet) {
  	
  	var directive = {
        restrict: 'EA',
        scope: {},
        link: link
    };

    return directive;


    function link(scope, element, attr, ctrl) {

    	element.on('click', elementClick);

    	function elementClick(){

    		cnCreateContactNet.createContactNet();

			}

    }
  }

 
}());