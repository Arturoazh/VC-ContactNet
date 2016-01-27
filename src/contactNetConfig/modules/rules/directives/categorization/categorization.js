(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnLanguages, $filter) {

  	var directive = {
        restrict: 'EA',
        scope: {
        	rule: '=cnRule',
					vocabulary: '=cnVocabulary'
        },
        templateUrl: '/contactNetConfig/modules/rules/directives/categorization/categorization.html',
        link: link
    };

    return directive;


    function link(scope, element, attr, ctrl) {

    	function init(){

    			console.log(attr);

    	}

    	init();

    }
  }

}());
