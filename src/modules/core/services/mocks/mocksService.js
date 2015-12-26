(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnMocks
   * @module core
   *
   * @description
   * Provides an interface that simulates a server to provide custom mocks
   *
   */

  angular
  	.module('virtual-center')
    .service('$cnMocks', service);

  /* ngInject */
  function service($http, $q, $timeout){

		var scope = this;

		scope.bbdd = {};

		scope.get = get;
		scope.getById = getById;
		scope.set = set;

		init();


		/**
		* @ngdoc method
		* @name $cnMocks#get
		*
		* @param {string} bbdd Table used to provide de data
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();
			var args = arguments;

			//Timeout to simulate server latency
			$timeout(function(){
				var array = [];
				angular.forEach(scope.bbdd[args[0]], function(){
					array.push(arguments[0]);
				});
				deferred.resolve(array);
			}, random(200, 500) );

			return deferred.promise;
		}

		/**
		* @ngdoc method
		* @name $cnMocks#getById
		*
		* @param {string} bbdd Table used to provide de data
		* @param {string} id Id to get the expected element
		*
		* @return {promise} element
		*/
		function getById(){
			var deferred = $q.defer();
			var args = arguments;
			//Timeout to simulate server latency
			$timeout(function(){
				deferred.resolve(scope.bbdd[args[0]][args[1]] || false);
			}, random(200, 500) );

			return deferred.promise;
		}

		/**
		* @ngdoc method
		* @name $cnMocks#set
		*
		* @param {string} bbdd Table used to set de data
		* @param {string} id Id to set the element
		* @param {object} data Element data
		*
		* @return {promise} element
		*/
		function set(){
			var deferred = $q.defer();
			var args = arguments;

			//Timeout to simulate server latency
			$timeout(function(){
				deferred.resolve(scope.bbdd[args[0]][args[1]] = args[2]);
			}, random(300, 500) );

			return deferred.promise;
		}


		function random(){
			return Math.floor(Math.random() * arguments[1]) + arguments[0];
		}

		function init(){
			$http.get('modules/core/services/mocks/json/menu.json').success(function(){
				scope.bbdd.menu = arguments[0];
			});
			$http.get('modules/core/services/mocks/json/contactNets.json').success(function(){
				scope.bbdd.contactNets = arguments[0];
			});
			$http.get('modules/core/services/mocks/json/routing.json').success(function(){
				scope.bbdd.routing = arguments[0];
			});
			$http.get('modules/core/services/mocks/json/channels.json').success(function(){
				scope.bbdd.channels = arguments[0];
			});
		}


		return scope;

  }

})();
