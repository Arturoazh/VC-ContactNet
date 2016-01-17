(function() {
	'use strict';

	angular
    .module('virtual-center')
    .directive('cnRepoCategorizations', directive);

  /* @ngInject */
  function directive() {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          downloadedData: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/categorizations/categorizations.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnCategories) {

    	$scope.categories = [];

      $scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnCategories.get().then(function(){
          $scope.categories = arguments[0];
          $scope.downloadedData = true;
        });
      }

      function addNew(){
        $scope.categories.unshift({
          id: -1,
          label: ""
        });
      }

      function save(){
        var args = arguments;
        $cnCategories.save($scope.categories[arguments[0]]).then(function(){
          $scope.categories[args[0]].id = arguments[0].id;  
        });
      }

      function remove(){
        var args = arguments;
        $cnCategories.remove($scope.categories[arguments[0]]).then(function(){
          $scope.categories.splice(args[0], 1);  
        });
      }

    }
  }


}());
