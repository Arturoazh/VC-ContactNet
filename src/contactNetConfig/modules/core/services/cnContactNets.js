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

  /* @ngInject */
  module.exports = function ($q, $cnMocks, $http){

		var scope = this;

		scope.contactNets = [];
		scope.get = get;
		scope.getById = getById;
		scope.getSpeech = getSpeech;
		scope.getStreamSpeech = getStreamSpeech;
		scope.getStrategies = getStrategies;
		scope.getVoices = getVoices;
		scope.getOutGoing = getOutGoing;
		scope.getOutGoingNumbering = getOutGoingNumbering;
		scope.getSupervisors = getSupervisors;
		scope.getAgents = getAgents;

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
			console.log('ID ContactNet Enviado', arguments[0]);

			$http.post('/ivr/getcontactnetbyid', { id : arguments[0] }).then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getSpeech() {
			var deferred = $q.defer();
			// console.log('ID Enviado', arguments[0]);
			console.log(arguments[0]);
			//OPCIONAL con comas type audio
			$http.post('/ivr/getspeech', {type : 'MOH'}).then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getSupervisors() {
			var deferred = $q.defer();
			
			$http.get('/ivr/getsupervisors').then(function () {
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getAgents() {
			var deferred = $q.defer();
			
			$http.get('/ivr/getagents').then(function () {
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getVoices() {
			var deferred = $q.defer();
			// console.log('ID Enviado', arguments[0]);
			console.log(arguments[0]);
			//OPCIONAL con comas type audio
			$http.get('/ivr/getvoices').then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getStreamSpeech() {
			var deferred = $q.defer();
			// console.log('ID Enviado', arguments[0]);
			console.log(arguments[0]);
			//OPCIONAL con comas type audio
			$http.get('/home/stream/streamspeech?id='+arguments[0]).then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getStrategies () {
			var deferred = $q.defer();
			// console.log('ID Enviado', arguments[0]);
			console.log('channelId', arguments[0]);
			//OPCIONAL con comas type audio
			$http.post('/ivr/getstrategies', {channelId : arguments[0]}).then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getOutGoing () {
			var deferred = $q.defer();
			// console.log('ID Enviado', arguments[0]);
			console.log('channelId', arguments[0]);
			//OPCIONAL con comas type audio
			$http.get('/ivr/getoutgoing').then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
		}

		function getOutGoingNumbering () {

			var deferred = $q.defer();
			// console.log('ID Enviado', arguments[0]);
			console.log('getOutGoingNumbering', arguments[0]);
			//OPCIONAL con comas type audio
			$http.get('/ivr/getoutgoingnumbering').then(function(){
				deferred.resolve(arguments[0].data);
			});

			return deferred.promise;
			
		}

		// get stream by id
		// /stream/streamspeech?id=1 : GET

		// getstrategy PARAM: channelId
		// /ivr/getstrategy : POST

		// getstrategy
		// /ivr/getvoices

		// TRAFICO SALIENTE
		// /ivr/getoutgoingnumbering : GET
		// GUARDAR EN outgoingConfiguration.outgoingConfig como array

		//	getshortnumberingitemsbyconfig
		//




		return scope;

  }

}());