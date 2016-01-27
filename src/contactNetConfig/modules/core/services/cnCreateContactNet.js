(function () {

	'use strict';

	/* @ngInject */
  module.exports = function ($cnContactNets) {

  	var scope = this;
  	scope.createContactNet = createContactNet;

  	function createContactNet () {

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

  	return scope;
  }
  
}())