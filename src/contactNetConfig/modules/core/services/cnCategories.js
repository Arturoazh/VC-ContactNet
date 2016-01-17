(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnCategories
   * @module core
   *
   * @description
   * Provides the categories for the application
   *
   * @param {object} categories 
   *
   */

  angular
  	.module('virtual-center')
    .service('$cnCategories', service);

  /* ngInject */
  function service($q, $http){

		var scope = this;

		scope.categories = [];
		scope.get = get;
		scope.save = save;
		scope.remove = remove;

		/**
		* @ngdoc method
		* @name $cnCategories#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$http.get('/ivr/getcategories').then(function(){
				deferred.resolve(arguments[0].data);
			});			

			return deferred.promise;
		}

		/**
		* @ngdoc method
		* @name $cnCategories#get
		*
		* @param {object} category
		*
		* @return {promise} elements
		*/
		function save(){
			var args = arguments
			var deferred = $q.defer();

			if(!~args[0].id){
				args[0].action = 'ADD';
			}else{
				args[0].action = 'MOD';
			}

			$http.post('/ivr/savecategories', args[0]).then(function(){
				deferred.resolve(arguments[0].data);
			});			

			return deferred.promise;
		}

		function remove(){
			var deferred = $q.defer();

			arguments[0].action = 'DEL';

			$http.post('/ivr/savecategories', arguments[0]).then(function(){
				deferred.resolve(arguments[0].data);
			});			

			return deferred.promise;
		}


		return scope;

  }

}());