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
  function service($q, $cnMocks, $http){

		var scope = this;

		scope.contactNets = [];
		scope.get = get;
		scope.getById = getById;
		scope.getSpeech = getSpeech;

		/**
		* @ngdoc method
		* @name $cnContactNets#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$http.get('/ivr/getcontactnets').then(function(){
				console.log('getcontactnets', arguments[0].data);
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getById() {
			var deferred = $q.defer();
			console.log('ID Enviado', arguments[0]);

			$http.post('/ivr/getcontactnetbyid', { id : arguments[0] }).then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getSpeech() {
			var deferred = $q.defer();
			console.log('ID Enviado', arguments[0]);

			$http.get('/ivr/getspeech/id/'+arguments[0]).then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		// getspeech


		return scope;

  }

}());