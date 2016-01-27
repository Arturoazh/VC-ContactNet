(function(){
	"use strict";

	 /**
   * @ngdoc service
   * @name $cnMenu
   * @module core
   *
   * @description
   * Provides the menu for the application
   *
   * @param {object} menu 
   *
   */

  /* @ngInject */
  module.exports = function($q, $cnMocks){

		var scope = this;

		var menu = false;

		scope.get = get;


		/**
		* @ngdoc method
		* @name $cnMenu#get
		*
		* @return {promise} elements
		*/
		function get(){
			var deferred = $q.defer();

			if(menu)
				deferred.resolve(menu);
			else
				$cnMocks.getById('menu', 'MENU').then(function(){
					menu = arguments[0];
					deferred.resolve(menu);
				});

			return deferred.promise;
		}


		return scope;

  }

})();
