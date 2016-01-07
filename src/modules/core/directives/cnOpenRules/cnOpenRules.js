(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnOpenRules', openRules);

    /* @ngInject */
    function openRules($cnRules) {
    	var directive = {
	        restrict: 'EA',
	        scope: {
						rule: '=cnRuleInfo'
					},
	        link: link
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {

	    	element.on('click', elementClick);

	    	function elementClick(){

	    		if(arguments[0].target.localName === 'button')
	    			return;

		  		angular.forEach($cnRules.rules, function () {

		  			var argsForEach = arguments;
		  			if (argsForEach[0].id == scope.rule.id) {
		  				if ($cnRules.rules[argsForEach[1]].downloadedData) {
		  					$cnRules.rules[argsForEach[1]].openCard = !$cnRules.rules[argsForEach[1]].openCard;
		  				}else {
		  					$cnRules.rules[argsForEach[1]].openCard = !$cnRules.rules[argsForEach[1]].openCard;
			  				$cnRules.getById().then(function () {
			  					$cnRules.rules[argsForEach[1]] = arguments[0][0];
			  					$cnRules.rules[argsForEach[1]].downloadedData = true;
			  					$cnRules.rules[argsForEach[1]].openCard = !$cnRules.rules[argsForEach[1]].openCard;
			  					console.log($cnRules.rules, $cnRules.rules[argsForEach[1]]);
								});
		  				};
		  				scope.$apply();
		  			};
		  		})
				}
	    }
    }

}());
