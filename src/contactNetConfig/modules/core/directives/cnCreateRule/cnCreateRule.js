(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnRules) {
  	
  	var directive = {
        restrict: 'EA',
        scope: {},
        link: link
    };

    return directive;


    function link(scope, element, attr, ctrl) {

    	element.on('click', elementClick);

    	function elementClick(){

    		console.log('lasldglasdg', $cnRules.rules);

				$cnRules.rules.splice(0, 0, {
					"id": random(1,50), 
					"description": "Nueva Regla",
					"openCard": true,
					"modificable": true,
				});

				$cnRules.getById().then(function () {
					$cnRules.rules[0].RuleInfo = arguments[0];
				});

			}

		  function random(){
				return Math.floor(Math.random() * arguments[1]) + arguments[0];
			}
    }
  }
 
}());