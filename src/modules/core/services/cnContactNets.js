(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnContactNets
   * @module core
   *
   * @description
   * Provides the contactNets for the application
   *
   * @param {object} menu 
   *
   */

  angular
  	.module('virtual-center')
    .service('$cnContactNets', service);

  /* ngInject */
  function service($q, $cnMocks){

		var scope = this;

		scope.get = get;
		scope.getById = getById;

		/**
		* @ngdoc method
		* @name $cnContactNets#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$cnMocks.get('listContactNets').then(function(){
				deferred.resolve(arguments[0]);
			});

			return deferred.promise;
		}

		function getById() {
			var deferred = $q.defer();

			$cnMocks.get('contactNetId').then(function(){
				deferred.resolve(arguments[0]);
			});

			return deferred.promise;
		}


		return scope;

  }

})();