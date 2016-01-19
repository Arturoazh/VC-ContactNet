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
          downloadedData: '=',
          card: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/categorizations/categorizations.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnCategories, $filter) {

      var oldCategories = [];
    	$scope.categories = [];

      $scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnCategories.get().then(function(){
          $scope.categories = arguments[0];
          oldCategories = angular.copy($scope.categories);
          $scope.downloadedData = true;
        });
      }

      function addNew(){
        $scope.categories.push({
          id: -1,
          label: "",
          modificable: true
        });
      }

      function save(){
        angular.forEach($scope.categories, function(){
          var args = arguments;
          if(args[0].id === -1 || $filter('filter')(oldCategories, {id: args[0].id})[0].label !== args[0].label ){
            $cnCategories.save(args[0]).then(function(){
              $scope.categories[args[1]].id = arguments[0].id;  
            });
          }
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
