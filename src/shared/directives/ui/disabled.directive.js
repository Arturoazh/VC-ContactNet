'use strict';

// @ngInject
module.exports = function disabled($rootScope) {
  return {
    priority: 100,
    restrict: 'A',
    compile: compile,
    scope: {
      disabled: '@'
    }
  };

  function compile($element, attrs) {
    return {
      pre: function (scope, element) {
        element.on('click', function (event) {

          var callback = function () {
            if (scope.disabled === 'true') {
              event.stopPropagation();
              event.preventDefault();
              return true;
            }
          };
          if ($rootScope.$$phase) {
            scope.$evalAsync(callback);
          } else {
            scope.$apply(callback);
          }
        });
        return scope.disabled;
      },

      post: function (scope, element) {
        scope.$watch( 'disabled',function () {
            if (scope.disabled === 'true'){
              element.addClass('disabled');
            }
            else element.removeClass('disabled');
          }
        );
      }
    };
  }

};