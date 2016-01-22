(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnAgentsBySupervisor', directive);

    /* @ngInject */
    function directive() {
    	
    	var directive = {
	        restrict: 'EA',
	        scope : {
	        	supervisor : '=',
	        	agents: '=',
	        	ngOpenCard : '='
	        },
	        link: link,
	        templateUrl: '/contactNetConfig/modules/core/directives/cnAgentsBySupervisor/cnAgentsBySupervisor.html',
        	controller: controller
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {

	    	console.log('cnSupervisorsConfig', scope);
	    	scope.filterSelected = true
	    	scope.querySearch = querySearch;
	    	scope.filterAgents = [];

	    	function querySearch () {
		      
	    		// console.log('Texto Query', arguments[0]);
	    		var result = [];
	    		for (var i = 0; i < scope.agents.length; i++) {
	    			if (~scope.agents[i].name.indexOf(arguments[0])) {
	    				result.push(scope.agents[i]);
	    			};
	    		};

		      return result;
		    }
	    }

	    /* @ngInject */
	    function controller ($scope) {
	    }

    }

 
}());