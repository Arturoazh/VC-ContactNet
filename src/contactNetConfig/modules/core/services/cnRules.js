(function(){
  "use strict";

   /**
   * @ngdoc service
   * @name $cnRules
   * @module core
   *
   * @description
   * Provides the rules for the application
   *
   * @param {object} rules 
   *
   */

  /* @ngInject */
  module.exports = function($q, $http){

    var scope = this;

    scope.rules = [];
    scope.get = get;
    scope.getById = getById;
    scope.save = save;
    scope.duplicate = duplicate;
    scope.remove = remove;
    

    /**
    * @ngdoc method
    * @name $cnRules#get
    *
    * @return {promise} elements
    */
    function get(){
      var deferred = $q.defer();

      $http.get('/ivr/getconfiguration').then(function(){
        deferred.resolve(arguments[0].data);
      });     

      return deferred.promise;
    }

    /**
    * @ngdoc method
    * @name $cnRules#get
    *
    * @param {object} rule
    *
    * @return {promise} elements
    */
    function save(){
      var args = arguments
      var deferred = $q.defer();

      $http.post('/ivr/saveconfigurationmultimedia', args[0]).then(function(){
        deferred.resolve(arguments[0].data);
      });     

      return deferred.promise;
    }


    /**
    * @ngdoc method
    * @name $cnRules#duplicate
    *
    * @param {string|number} id
    * @param {string} name
    *
    * @return {promise} elements
    */
    function duplicate(){
      var args = arguments
      var deferred = $q.defer();

      $http.post('/ivr/duplicateconfig', {configurationId: args[0], configurationName: args[1]} ).then(function(){
        deferred.resolve(arguments[0].data);
      });     

      return deferred.promise;
    }

    /*
    * @param {string|<Array>string} multimedia_ids
    */
    function remove(){
      var deferred = $q.defer();

      $http.post('/ivr/deleteconfiguration', {id: arguments[0].id}).then(function(){
        deferred.resolve(arguments[0].data);
      });     

      return deferred.promise;
    }


    function getById(){
      var deferred = $q.defer();

      $http.post('/ivr/getmultimediatree', {id : arguments[0]}).then(function(){
        deferred.resolve(arguments[0].data);
      });     

      return deferred.promise;
    }


    return scope;

  }

}());