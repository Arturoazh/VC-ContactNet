(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnRules
   * @module core
   *
   * @description
   * Provides the rules for the application
   *
   * @param {object} rules 
   *
   */

  angular
  	.module('virtual-center')
    .service('$cnRules', service);

  /* ngInject */
  function service($q, $cnMocks){

		var scope = this;

		scope.rules = [];
		scope.get = get;
		scope.getById = getById;

		/**
		* @ngdoc method
		* @name $cnRules#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$cnMocks.get('rules').then(function(){
				deferred.resolve(arguments[0]);
			});			

			return deferred.promise;
		}

		function getById() {
			var deferred = $q.defer();

			$cnMocks.get('rulesId').then(function(){
				deferred.resolve(arguments[0]);
			});

			return deferred.promise;
		}


		return scope;

  }

}());