(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($timeout) {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          ngModel: '=',
          downloadedData: '=',
          card: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/contactNets/directives/skills/skills.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnSkills, $filter) {

      $scope.skills = [];
      $scope.downloadedData;
      $scope.card;
      $scope.toogleAll = toogleAll;
      $scope.select = select;

      $cnSkills.get().then(function(){
        
        angular.forEach(arguments[0], function(){
          arguments[0].selected = Boolean($filter('filter')($scope.ngModel, {id: arguments[0].id}, true).length);
          $scope.skills.push(arguments[0]);
        });

        $scope.downloadedData = true;
      });

      function toogleAll(){
        var args = arguments;
        angular.forEach($scope.skills, function () {
          if(arguments[0].selected !== args[0]){
            arguments[0].selected = args[0];
            select(arguments[0]);  
          }
        })
      }

      function select(){
        var args = arguments;
        if(args[0].selected){
          $scope.ngModel.push(args[0]);
        }else{
          angular.forEach($scope.ngModel, function(){
            if(args[0].id === arguments[0].id){
              $scope.ngModel.splice(arguments[1], 1);  

            }
          });
        }
      }


    }
  }


}());
