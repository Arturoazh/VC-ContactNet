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

  /* @ngInject */
  module.exports = function ($q, $http){

		var scope = this;

		scope.channels = [];
		scope.get = get;
		scope.save = save;
		scope.remove = remove;
		scope.getById = getById;

		/**
		* @ngdoc method
		* @name $cnChannels#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$http.get('/ivr/getnetworkmultimedias').then(function(){
				deferred.resolve(arguments[0].data);
			});			

			return deferred.promise;
		}

		/**
		* @ngdoc method
		* @name $cnChannels#get
		*
		* @param {object} channel
		*
		* @return {promise} elements
		*/
		function save(){
			var args = arguments
			var deferred = $q.defer();

			$http.post('/ivr/savenetworkmultimedia', args[0]).then(function(){
				deferred.resolve(arguments[0].data);
			});			

			return deferred.promise;
		}

		/*
		* @param {string|<Array>string} multimedia_ids
		*/
		function remove(){
			var deferred = $q.defer();
			var remove = angular.isArray(arguments[0]) ? arguments[0] : [arguments[0]];

			$http.post('/ivr/deletenetworkmultimedia', remove).then(function(){
				deferred.resolve(arguments[0].data);
			});			

			return deferred.promise;
		}

		function getById(){
			var deferred = $q.defer();

			$http.post('/ivr/getnetworkmultimediabyid', {id : arguments[0]}).then(function(){
				deferred.resolve(arguments[0].data);
			});			

			return deferred.promise;
		}


		return scope;

  }

}());