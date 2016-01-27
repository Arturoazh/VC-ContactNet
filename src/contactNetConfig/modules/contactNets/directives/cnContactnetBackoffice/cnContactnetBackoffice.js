(function() {
  'use strict';
  
  /* @ngInject */
  module.exports = function() {
    
    var directive = {
        restrict: 'EA',
        scope : {
          contactnet : '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/contactNets/directives/cnContactnetBackoffice/cnContactnetBackoffice.html',
        controller: controller
    };

    return directive;


    function link(scope, element, attr, ctrl) {
      

    }

    /* @ngInject */
    function controller ($scope, $cnRepos) {
      
      $scope.repos = {};
      $scope.open = open;


      $cnRepos.get().then(function(){
        $scope.repos = arguments[0];
      });

      function open(){
        $scope.repos[arguments[0]].downloadedData = false;
        $scope.repos[arguments[0]].openCard = !$scope.repos[arguments[0]].openCard;
      }
      
    }
  }

 
}());