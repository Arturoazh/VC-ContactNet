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

  /* @ngInject */
  module.exports = function ($http, $q, $timeout){

  	var listJsons = ['menu', 'listContactNets', 'contactNetId', 'channels', 'rules', 'rulesId', 'languages', 'channels', 'channelsId'];
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
		* @param {object} data Element data
		* @param {string} id Id to set the element
		*
		* @return {promise} element
		*/
		function set(){
			var deferred = $q.defer();
			var args = arguments;

			//Timeout to simulate server latency
			$timeout(function(){
				if(args[2] === undefined){
					var id = random(1000,9999);
					args[1].id = id;
					deferred.resolve(scope.bbdd[args[0]][id] = args[1]);
				}else
					deferred.resolve(scope.bbdd[args[0]][args[2]] = args[1]);
			}, random(300, 500) );

			return deferred.promise;
		}


		function random(){
			return Math.floor(Math.random() * arguments[1]) + arguments[0];
		}

		function init(){

			for (var i = 0; i < listJsons.length; i++) {
				(function (e) {
					var args = arguments;
					$http.get('/contactNetConfig/modules/core/services/mocks/json/'+args[0]+'.json').success(function(){
						scope.bbdd[args[0]] = arguments[0];
					});
				}(listJsons[i]));
			};
		}

		return scope;

  }

})();
