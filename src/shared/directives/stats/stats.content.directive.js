'use strict';

// @ngInject
module.exports = function statsContentDirective(statsService, issuesService, $filter, $state, helpers) {

  return {
    link: link,
    restrict: 'E',
    templateUrl: '/shared/directives/stats/stats.content.directive.html'
  };

  function link(scope, element, attrs) {

    _init();

    var currentColumns = [];
    var currentRequest = null;

    scope.configTable = {
      order: '-DATE.value',
      limit: 10,
      limitSelect: [10, 20, 30, 40, 50],
      page: 1,
      paginationLabel: {
        page: $filter('translate')('PAGE'),
        rowsPerPage: $filter('translate')('ROWS_PER_PAGE'),
        of: $filter('translate')('OF')
      }
    };

    function _init() {

      scope.selected          = [];
      scope.unselected        = [];
      scope.stats             = [];
      getSelectedColumns();
      getStats();
      scope.countKeys         = countKeys;
      scope.isExistMulti      = isExistMulti;
      scope.isSelected        = isSelected;
      scope.getCurrentColumns = getCurrentColumns;
      scope.clickedCell       = clickedCell;
      scope.getFormattedValue = getFormattedValue;
      scope.clickedHeader     = clickedHeader;
      scope.exportXLS         = statsService.downloadXLSStats;
    }

    function getSelectedColumns() {
      statsService.getSelectedColumns().then(function (selected) {
        scope.selected = selected;
      });
    }

    function getStats() {
      statsService.getStats().then(function (stats) {
        scope.stats = stats;
      });
    }

    function countKeys(obj) {
      return Object.keys(obj).length;
    }

    function isExistMulti() {
      for (var key in getCurrentColumns()) {
        if (scope.stats[0][key].type === 'multiple') return true;
      }
      return false;
    }

    function isSelected(column) {
      for (var i = 0, ii = scope.selected.length; i < ii; ++i) {
        if (scope.selected[i].label === column) return true;
      }
      return false;
    }

    function getCurrentColumns() {
      if (currentRequest !== statsService.getCurrentRequest()) {
        currentRequest = statsService.getCurrentRequest();
        currentColumns = {};
        for (var key in scope.stats[0]) {
          if (scope.stats[0][key].type !== 'multiple' && isSelected(key)) {
            currentColumns[key] = scope.stats[0][key];
          } else {
            for (var subkey in scope.stats[0][key].values) {
              if (isSelected(subkey)) {
                if (!( key in currentColumns)) currentColumns[key] = {type: 'multiple', values: {}};
                currentColumns[key].values[subkey] = scope.stats[0][key].values[subkey];
              }
            }
          }
        }
      }
      return currentColumns;
    }

    function getFormattedValue(cell) {
      if (!cell) return '';
      switch (cell.type) {
        case 'float':
          return $filter('number')(cell.value, 4);
        case 'percent':
          return $filter('number')(cell.value, 2) + '%';
        case 'date':
          return $filter('dateFormat')(cell.value, statsService.getFormatTimePattern());
        case 'datetime':
          return $filter('dateFormat')(cell.value, 'DD/MM/YYYY HH:mm:ss');
        case 'contactnet':
          return statsService.showContactnetById(cell.value);
        case 'agent':
          return statsService.showAgentById(cell.value);
        case 'category':
          return $filter('translate')(issuesService.getCategoryDescription(cell.value));
        case 'qualification':
          return $filter('translate')(issuesService.getQualificationDescription(cell.value));
        case 'seconds':
          return helpers.getTimeBySeconds(cell.value);
        case 'channel':
          return $filter('translate')('CHANNEL_' + cell.value);
        case 'status':
        case 'translate':
          return $filter('translate')(cell.value);
        default :
          return cell.value;
      }
    }

    function clickedCell(cell) {
      if (!cell) return;
      switch (cell.type) {
        case 'date':
          return statsService.nextTimePattern();
        case 'contactnet':
          return clickedContactnet(cell.value);
        case 'agent':
          return clickedAgent(cell.value);
        case 'category':
          issuesService.setCategory(cell.value);
          return $state.go('panel.issues');
        case 'qualification':
          issuesService.setQualification(cell.value);
          return $state.go('panel.issues');
        case 'status':
          issuesService.setStatus(cell.value);
          return $state.go('panel.issues');
        default:
          return;
      }
    }

    function clickedHeader(headerName) {
      var channelId = headerName[6]; //tied to value 'Stats_1'
      statsService.setChannel(channelId);
      statsService.filterStats();
    }

    function clickedContactnet(contactnetId) {
      statsService.filterByContactnet(contactnetId);
      $state.go('panel.stats', {
        mode: 'contactnet',
        level: statsService.getNextLevel()
      });
    }

    function clickedAgent(agentId) {
      statsService.filterByAgent(agentId);
      $state.go('panel.stats', {
        mode: 'agent',
        level: statsService.getNextLevel()
      });
    }

  }
};

   