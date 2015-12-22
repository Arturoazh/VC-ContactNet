(function(){
  "use strict";

  angular
  .module('virtual-center')
  .config(config);

  /* ngInject */
  function config ($stateProvider, $urlRouterProvider) {
      // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("home");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/home",
      templateUrl: "modules/home/home.html",
      controller: 'homeController'
    })
  }

})();