(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnSelectAgents', directive);

    /* @ngInject */
    function directive($cnContactNets) {
    	
    	var directive = {
	        restrict: 'EA',
	        scope : {
	        	agents : '='
	        },
	        link: link,
	        templateUrl: '/contactNetConfig/modules/core/directives/cnSelectAgents/cnSelectAgents.html',
        	controller: controller
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {
	    	console.log('cnSelectAgents', scope);

	    	scope.selectDeselectAll = selectDeselectAll;

	    	function selectDeselectAll () {
	    		var args = arguments;
	    		angular.forEach(scope.agents, function () {
	    			arguments[0].selected = args[0];
	    		})
	    	}

	    	$cnContactNets.getAgents().then(function () {
	    		console.log('getAgents', arguments);
	    		angular.forEach(arguments[0], function () {
	    			var argsAgentsGet = arguments[0];
						angular.forEach(scope.agents, function () {
							console.log(arguments[0], argsAgentsGet);
							if (argsAgentsGet.id != arguments[0].id) {
								scope.agents.push(argsAgentsGet[0]);
							}
						})
	    		})
	    	})

	    }

	    /* @ngInject */
	    function controller ($scope) {
	    	// console.log('cnSupervisorsConfig', $scope);

	    }
    }

 
}());