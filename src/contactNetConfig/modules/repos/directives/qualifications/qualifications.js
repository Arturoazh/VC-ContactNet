(function() {
	'use strict';

	angular
    .module('virtual-center')
    .directive('cnRepoQualifications', directive);

  /* @ngInject */
  function directive() {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          downloadedData: '=',
          card: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/qualifications/qualifications.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnQualifications, $filter) {

      var oldQualifications = [];
    	$scope.qualifications = [];

      $scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnQualifications.get().then(function(){
          $scope.qualifications = arguments[0];
          oldQualifications = angular.copy($scope.qualifications);
          $scope.downloadedData = true;
        });
      }

      function addNew(){
        $scope.qualifications.push({
          id: -1,
          label: "",
          value: 'POSITIVE',
          modificable: true
        });
      }

      function save(){
        angular.forEach($scope.qualifications, function(){
          var args = arguments;
          if(args[0].id === -1 || $filter('filter')(oldQualifications, {id: args[0].id})[0].label !== args[0].label
              || $filter('filter')(oldQualifications, {id: args[0].id})[0].value !== args[0].value ){
            $cnQualifications.save(args[0]).then(function(){
              $scope.qualifications[args[1]].id = arguments[0].id;  
            });
          }
        });
      }

      function remove(){
        var args = arguments;
        $cnQualifications.remove($scope.qualifications[arguments[0]]).then(function(){
          $scope.qualifications.splice(args[0], 1);  
        });
      }

    }
  }


}());
