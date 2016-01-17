(function() {
	'use strict';

	angular
    .module('virtual-center')
    .directive('cnRepoPauseStates', directive);

  /* @ngInject */
  function directive() {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          downloadedData: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/repos/directives/pause_states/pause_states.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnPauseStatus) {

    	$scope.pause_states = [];

      $scope.addNew = addNew;
      $scope.remove = remove;
      $scope.save = save;

      init();

      function init(){
        $cnPauseStatus.get().then(function(){
          $scope.pause_states = arguments[0];
          $scope.downloadedData = true;
        });
      }

      function addNew(){
        $scope.pause_states.unshift({
          id: -1,
          label: ""
        });
      }

      function save(){
        var args = arguments;
        $cnPauseStatus.save($scope.pause_states[arguments[0]]).then(function(){
          $scope.pause_states[args[0]].id = arguments[0].id;  
        });
      }

      function remove(){
        var args = arguments;
        $cnPauseStatus.remove($scope.pause_states[arguments[0]]).then(function(){
          $scope.pause_states.splice(args[0], 1);  
        });
      }

    }
  }


}());
