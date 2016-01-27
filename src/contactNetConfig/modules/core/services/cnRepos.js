(function(){
  "use strict";

   /**
   * @ngdoc service
   * @name $cnRepos
   * @module core
   *
   * @description
   * Provides the repositories for the application
   *
   */

  /* @ngInject */
  module.exports = function($q, $timeout){

    var scope = this;

    var list = {
      'qualifications': {
        icon: 'school',
        title: 'Cualificaciones de casos',
        openCard: false,
        downloadedData: false
      },
      'categorizations': {
        icon: 'local_offer',
        title: 'Categorización de casos',
        openCard: false,
        downloadedData: false
      },
      'pause_states': {
        icon: 'pause_state',
        title: 'Estados de pausa',
        openCard: false,
        downloadedData: false
      },
      'skills': {
        icon: 'skills',
        title: 'Skills de agentes',
        openCard: false,
        downloadedData: false
      }
    };

    scope.get = get;
    

    /**
    * @ngdoc method
    * @name $cnRepos#get
    *
    * @return {promise} elements
    */
    function get(){
      var deferred = $q.defer();

      $timeout(function(){
        deferred.resolve(list);
      }, 0);   

      return deferred.promise;
    }



    return scope;

  }

}());