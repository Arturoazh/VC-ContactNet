'use strict';

module.exports = angular.module('shared', [])
  .factory('helpers', require('./utils/helpers.utils.js'))
  .factory('notification', require('./utils/notification.utils.js'))
  .factory('extensions', require('./extensions/index'))

  .directive('disabled', require('./directives/ui/disabled.directive.js'))
  .directive('clickIf', require('./directives/ui/click.if.directive.js'))
  .directive('scrollbarDirective', require('./directives/ui/scrollbar.directive.js'))
  .directive('ngDraggableDirective', require('./directives/ui/ng.draggable.directive.js'))

  .filter('orderObjectBy', require('./filters/orderObjectBy.filter.js'))
  .filter('dateFormat', require('./filters/dateFormat.filter.js'))
  .filter('reverseFilter', require('./filters/reverse.filter.js'))
  .filter('unsafeFilter', require('./filters/unsafe.filter.js'))
  .filter('objectFilter', require('./filters/object.filter.js'))

  .constant('configuration', require('./conf/index'))
;