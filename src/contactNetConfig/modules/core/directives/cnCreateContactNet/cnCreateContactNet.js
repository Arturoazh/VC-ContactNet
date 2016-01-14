(function() {
	'use strict';

	angular
        .module('virtual-center')
        .directive('cnCreateContactNet', createContactNet);

    /* @ngInject */
    function createContactNet($cnContactNets) {
    	
    	var directive = {
	        restrict: 'EA',
	        scope: {},
	        link: link
	    };

	    return directive;


	    function link(scope, element, attr, ctrl) {

	    	element.on('click', elementClick);

	    	function elementClick(){

	    		console.log('lasldglasdg', $cnContactNets.contactNets);

					$cnContactNets.contactNets.splice(0, 0, {
						"id": random(1,50), 
						"description": "Nuevo ContactNet",
						"queueType": "BOTH", 
						"isACD": 1, 
						"openCard": true,
						"modificable": true,
						"channels": { 
							"1": 1, 
							"2": 2, 
							"3": 3
						} 
					});

					$cnContactNets.getById().then(function () {
  					$cnContactNets.contactNets[0].contactNetInfo = arguments[0];
					});

				}

			  function random(){
					return Math.floor(Math.random() * arguments[1]) + arguments[0];
				}
	    }
    }
 
}());