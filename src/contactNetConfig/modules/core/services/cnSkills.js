(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnSkills
   * @module core
   *
   * @description
   * Provides the skills for the application
   *
   * @param {object} skills 
   *
   */

  /* @ngInject */
  module.exports = function ($q, $http){

		var scope = this;

		scope.skills = [];
		scope.get = get;
    scope.getContactnets = getContactnets;
		scope.save = save;
		scope.remove = remove;
		scope.getById = getById;

		/**
		* @ngdoc method
		* @name $cnSkills#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			$http.get('/ivr/getskills').then(function(){
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

      $http.post('/ivr/getcontactnetsusedbyskill/', {id: args[0].id} ).then(function(){
        deferred.resolve(arguments[0].data);
      }, function(){
        deferred.reject(arguments[0].data);
      });     

      return deferred.promise;
    }

		/**
		* @ngdoc method
		* @name $cnSkills#get
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

			$http.post('/ivr/saveskill', args[0]).then(function(){
				deferred.resolve(arguments[0].data);
			}, function(){
        deferred.reject(arguments[0].data);
      });			

			return deferred.promise;
		}

		function remove(){
			var deferred = $q.defer();

			// arguments[0].action = 'DEL';

			// $http.post('/ivr/saveskill', arguments[0]).then(function(){
			// 	deferred.resolve(arguments[0].data);
			// });

			$http.post('/ivr/deleteskill', {id:arguments[0].id}).then(function(){
				deferred.resolve(arguments[0].data);
			}, function(){
        deferred.reject(arguments[0].data);
      });				

			return deferred.promise;
		}

		function getById() {
			var deferred = $q.defer();

			$cnMocks.get('skillsId').then(function(){
				deferred.resolve(arguments[0]);
			});

			return deferred.promise;
		}


		return scope;

  }

}());