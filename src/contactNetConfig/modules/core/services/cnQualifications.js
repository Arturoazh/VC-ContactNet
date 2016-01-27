(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnQualifications
   * @module core
   *
   * @description
   * Provides the qualifications for the application
   *
   * @param {object} qualifications 
   *
   */

  /* @ngInject */
	module.exports = function ($q, $http){

		var scope = this;

		scope.qualifications = [];
		scope.get = get;
    scope.getContactnets = getContactnets;
		scope.save = save;
		scope.remove = remove;

		/**
		* @ngdoc method
		* @name $cnQualifications#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$http.get('/ivr/getqualifications').then(function(){
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

      $http.post('/ivr/getcontactnetsusedbyqualification/', {id: args[0].id} ).then(function(){
        deferred.resolve(arguments[0].data);
      }, function(){
        deferred.reject(arguments[0].data);
      });     

      return deferred.promise;
    }

		/**
		* @ngdoc method
		* @name $cnQualifications#get
		*
		* @param {object} qualification
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

			$http.post('/ivr/savequalification', args[0]).then(function(){
				deferred.resolve(arguments[0].data);
			}, function(){
        deferred.reject(arguments[0].data);
      });			

			return deferred.promise;
		}

		function remove(){
			var deferred = $q.defer();

			// arguments[0].action = 'DEL';

			// $http.post('/ivr/savequalifications', arguments[0]).then(function(){
			// 	deferred.resolve(arguments[0].data);
			// });

			$http.post('/ivr/deletequalification', {id:arguments[0].id}).then(function(){
				deferred.resolve(arguments[0].data);
			}, function(){
        deferred.reject(arguments[0].data);
      });				

			return deferred.promise;
		}


		return scope;

  }

}());