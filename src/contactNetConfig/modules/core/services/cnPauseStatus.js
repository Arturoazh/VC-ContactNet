(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnPauseStatus
   * @module core
   *
   * @description
   * Provides the pauseStatus for the application
   *
   * @param {object} pauseStatus 
   *
   */

  /* @ngInject */
  module.exports = function ($q, $http){

		var scope = this;

		scope.pauseStatus = [];
		scope.get = get;
    scope.getContactnets = getContactnets;
		scope.save = save;
		scope.remove = remove;
    

		/**
		* @ngdoc method
		* @name $cnPauseStatus#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$http.get('/ivr/getpausestatus').then(function(){
				deferred.resolve(arguments[0].data);
			}, function(){
        deferred.reject(arguments[0].data);
      });			

			return deferred.promise;
		}

		/**
		* @ngdoc method
		* @name $cnPauseStatus#get
		*
		* @param {object} skill
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

			$http.post('/ivr/savepausestatus', args[0]).then(function(){
				deferred.resolve(arguments[0].data);
			}, function(){
        deferred.reject(arguments[0].data);
      });			

			return deferred.promise;
		}

    /**
    * @ngdoc method
    * @name $cnPauseStatus#getContactnets
    *
    * @param {object} skill
    *
    * @return {promise} elements
    */
    function getContactnets(){
      var args = arguments
      var deferred = $q.defer();

      $http.post('/ivr/getcontactnetsusedbypausestatus/', {id: args[0].id} ).then(function(){
        deferred.resolve(arguments[0].data);
      }, function(){
        deferred.reject(arguments[0].data);
      });     

      return deferred.promise;
    }


		function remove(){
			var deferred = $q.defer();

			// arguments[0].action = 'DEL';

			// $http.post('/ivr/savepausestatus', arguments[0]).then(function(){
			// 	deferred.resolve(arguments[0].data);
			// });	

			$http.post('/ivr/deletepausestatus', {id:arguments[0].id}).then(function(){
				deferred.resolve(arguments[0].data);
			}, function(){
        deferred.reject(arguments[0].data);
      });			

			return deferred.promise;
		}


		return scope;

  }

}());