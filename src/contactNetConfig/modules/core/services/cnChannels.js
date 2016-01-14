(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnChannels
   * @module core
   *
   * @description
   * Provides the channels for the application
   *
   * @param {object} channels 
   *
   */

  angular
  	.module('virtual-center')
    .service('$cnChannels', service);

  /* ngInject */
  function service($q, $cnMocks){

		var scope = this;

		scope.channels = [];
		scope.get = get;
		scope.getById = getById;

		/**
		* @ngdoc method
		* @name $cnChannels#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$cnMocks.get('channels').then(function(){
				deferred.resolve(arguments[0]);
			});

			return deferred.promise;
		}

		function getById() {
			var deferred = $q.defer();

			$cnMocks.get('channelsId').then(function(){
				deferred.resolve(arguments[0]);
			});

			return deferred.promise;
		}


		return scope;

  }

}());
