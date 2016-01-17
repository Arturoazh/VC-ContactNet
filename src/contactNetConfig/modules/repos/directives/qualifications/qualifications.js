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
          downloadedData: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/qualifications/qualifications.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnQualifications) {

    	$scope.qualifications = [];

      $scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnQualifications.get().then(function(){
          $scope.qualifications = arguments[0];
          $scope.downloadedData = true;
        });
      }

      function addNew(){
        $scope.qualifications.unshift({
          id: -1,
          label: ""
        });
      }

      function save(){
        var args = arguments;
        $cnQualifications.save($scope.qualifications[arguments[0]]).then(function(){
          $scope.qualifications[args[0]].id = arguments[0].id;  
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
