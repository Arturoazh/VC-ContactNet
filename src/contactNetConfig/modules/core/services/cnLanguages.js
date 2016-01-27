(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnLanguages
   * @module core
   *
   * @description
   * Provides the languages for the application
   *
   * @param {object} languages 
   *
   */

  /* @ngInject */
  module.exports = function ($q, $cnMocks){

		var scope = this;

		var languages = false;

		scope.get = get;

		/**
		* @ngdoc method
		* @name $cnLanguages#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			if(languages)
				deferred.resolve(languages);
			else
				$cnMocks.get('languages').then(function(){
					languages = arguments[0];
					deferred.resolve(languages);
				});

			return deferred.promise;
		}


		return scope;

  }

})();
