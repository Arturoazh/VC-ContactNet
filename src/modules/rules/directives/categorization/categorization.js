(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnCategorization', directive);

    /* @ngInject */
    function directive($cnLanguages, $filter) {
    	
    	var directive = {
	        restrict: 'EA',
	        scope: {
	        	rule: '=cnRule'
	        },
	        templateUrl: 'modules/rules/directives/categorization/categorization.html',
	        link: link
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {

	    	function init(){

	    		

	    	}

	    	init();
	    	
	    }
    }
 
}());