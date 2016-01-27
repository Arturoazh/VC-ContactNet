(function() {
	'use strict';

  /* @ngInject */
  module.exports = function () {

  	var directiveObj = {
        restrict: 'EA',
        scope: {
          ngModel: '=',
          downloadedData: '=',
          card: '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/contactNets/directives/qualifications/qualifications.html',
      	controller: controller
    };

    return directiveObj;


    function link(scope, element, attr, ctrl) {

    }

    /* @ngInject */
    function controller ($scope, $cnQualifications, $filter) {

      $scope.qualifications = [];
      $scope.downloadedData;
      $scope.card;
      $scope.actionCard = actionCard;

      $cnQualifications.get().then(function(){
        $scope.qualifications = arguments[0];
        $scope.downloadedData = true;
      });

      function actionCard(){
        var args = arguments;
        if( $filter('filter')($scope.ngModel, {id: args[0].id}, true).length ){
          angular.forEach($scope.ngModel, function(){
            if(arguments[0].id === args[0].id){
              $scope.ngModel.splice(arguments[1], 1);
            }  
          });
        }else{
          $scope.ngModel.push(args[0]);
        }
      }


    }
  }


}());
