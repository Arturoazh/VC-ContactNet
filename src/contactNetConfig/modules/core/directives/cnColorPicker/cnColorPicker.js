(function () {
  'use strict';
  
  angular.
    module("virtual-center").
    directive("cnColorPicker", directive);

  /* @ngInject */
  function directive() {
    return {
      restrict: 'E',
      templateUrl: '/contactNetConfig/modules/core/directives/cnColorPicker/cnColorPicker.html',
      link: link,
      scope: {
        options: '=',
        ngModel: '=',
        onColorChanged: '&',
        ngDisabled: '='
      }
    };

    /* @ngInject */
    function link(scope, element, attr, ctrl) {

      scope.changeColor = function (option) {
        if(scope.ngModel != option && !ngDisabled) {
          var old = scope.ngModel;
          scope.ngModel = option;
          scope.onColorChanged({newColor: option, oldColor: old});
        }
      }

    }
  }
}());