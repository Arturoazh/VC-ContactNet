'use strict';

// @ngInject
module.exports = function statsFilterDirective(statsService) {

  return {
    link: link,
    restrict: 'E',
    scope: {
      mode: '=',
      level: '='
    },
    templateUrl: '/shared/directives/stats/stats.filters.directive.html'
  };

  function link(scope, element, attrs) {
    var mode = statsService.getMode();
    var level = statsService.getLevel();
    var filters = element.find('#stats-filters');

    _init();

    function _init() {
      getContactnets();
      getAgents();
     // filters.hide();
      scope.isVisible     = true;
      scope.changeFilters = changeFilters;
      scope.moveColumn    = moveColumn;
      scope.showFilters   = showFilters;
      scope.channels      = statsService.getChannels();
      scope.timePatters   = statsService.getTimePattern();
      scope.filter        = statsService.getFilter();

      statsService.getColumnsFilter(mode, level).then(function (columns) {
        scope.unselected = columns;
      });

      statsService.getSelectedColumns(mode, level).then(function (selected) {
        scope.selected = selected;
      });

    }

    function getContactnets() {
      statsService.getContactnets().then(function (selected) {
        scope.contactnets = selected;
      });
    }

    function getAgents() {
      statsService.getAgents().then(function (selected) {
        scope.agents = selected;
      });
    }

    function changeFilters() {
      statsService.filterStats();
    }

    function showFilters() {
      if (scope.isVisible) {
        filters.hide();
      } else {
        filters.show();
      }
      scope.isVisible = !scope.isVisible;
    }

    function moveColumn(list, index) {
      var item = list.splice(index, 1)[0];
      if (item.value === 'aux') {
        statsService.incrementCurrentRequest();
      } else {
        statsService.filterStats();
      }
    }

  }

};
