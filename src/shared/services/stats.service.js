'use strict';

// @ngInject
module.exports = function statsService($http, $q, configuration, notification) {

  var _columns, _selected, _mode, _level, _acds, _agents, _stats, _currentRequest, _filter;

  return {
    load: load,
    getMode: getMode,
    getLevel: getLevel,
    getNextLevel: getNextLevel,
    getColumnsFilter: getColumnsFilter,
    getSelectedColumns: getSelectedColumns,
    getContactnets: getContactnets,
    getAgents: getAgents,
    filterStats: filterStats,
    downloadXLSStats: downloadXLSStats,
    getStats: getStats,
    getCurrentRequest: getCurrentRequest,
    incrementCurrentRequest: incrementCurrentRequest,
    getFilter: getFilter,
    getChannels: getChannels,
    getTimePattern: getTimePattern,
    getFormatTimePattern: getFormatTimePattern,
    nextTimePattern: nextTimePattern,
    filterByContactnet: filterByContactnet,
    filterByAgent: filterByAgent,
    setChannel: setChannel,
    showContactnetById: showContactnetById,
    showAgentById: showAgentById
  };

  function _init() {
    _columns        = [];
    _selected       = [];
    _mode           = null;
    _level          = null;
    _acds           = [];
    _agents         = [];
    _stats          = [];
    _currentRequest = 0;
    _filter         = {};

    var now             = new Date();
    _filter.initDate    = '01/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    _filter.laterDate   = '31/' + (now.getMonth() + 1) + '/' + now.getFullYear();
    _filter.initTime    = new Date('1970/01/01 00:00:00');
    _filter.laterTime   = new Date('1970/01/01 23:59:59');
    _filter.timePattern = getTimePattern()[0];
    _filter.contactnets = [];
    _filter.agents      = [];
    _filter.channels    = [];
  }

  function load(mode, level) {
    if (mode !== _mode) _init();
    getSelectedColumns(mode, level).then(function () {
      getColumnsFilter(mode, level).then(function () {
        getAgents().then(function () {
          filterStats();
        });
        removeSelectedToUnselected();
      });
    });
  }

  function getMode() {
    return _mode;
  }

  function getLevel() {
    return _level;
  }

  function getNextLevel() {
    return (_level !== '3') ? '' + (+_level + 1) : _level;
  }

  function getSelectedColumns(mode, level) {
    var defered = $q.defer();
    if (mode && (_selected.length === 0 || mode !== _mode || level !== _level)) {
      _getDefaultColumnsFilter(mode, level).then(function (response) {
        if (response.status === 200) {
          _selected.length = 0;
          angular.extend(_selected, response.data);
          defered.resolve(_selected);
        }
      });
    } else {
      defered.resolve(_selected);
    }
    return defered.promise;
  }

  function getColumnsFilter(mode, level) {
    var defered = $q.defer();
    if (mode && (_columns.length === 0 || mode !== _mode || level !== _level)) {
      _getColumnsFilter(mode, level).then(function (response) {
        if (response.status === 200) {
          _mode           = mode;
          _level          = level;
          _columns.length = 0;
          angular.extend(_columns, response.data);
          defered.resolve(_columns);
        }
      });
    } else {
      defered.resolve(_columns);
    }
    return defered.promise;
  }

  function removeSelectedToUnselected() {
    for (var i = 0, ii = _selected.length; i < ii; ++i) {
      for (var j = 0, jj = _columns.length; j < jj; ++j) {
        if (_selected[i].label === _columns[j].label) {
          _columns.splice(j, 1);
          break;
        }
      }
    }
  }

  function getStats() {
    var defered = $q.defer();
    defered.resolve(_stats);
    return defered.promise;
  }

  function getContactnets() {
    var defered = $q.defer();
    if (_acds.length !== 0) {
      defered.resolve(_acds);
    } else {
      _getMyACDs().then(function (response) {
        if (response.status === 200) {
          _acds = response.data;
          defered.resolve(_acds);
        }
      });
    }
    return defered.promise;
  }

  function getAgents() {
    var defered = $q.defer();
    if (_agents.length !== 0) {
      defered.resolve(_agents);
    } else {
      _getMyAgents().then(function (response) {
        if (response.status === 200) {
          _agents = response.data;
          defered.resolve(_agents);
        }
      });
    }
    return defered.promise;
  }

  function _getBackFilter(format) {
    var initDate      = _filter.initDate.split('/');
    initDate          = parseInt(+new Date(initDate[2] + '-' + initDate[1] + '-' + initDate[0]) / 1000);
    var laterDate     = _filter.laterDate.split('/');
    laterDate         = parseInt(+new Date(laterDate[2] + '-' + laterDate[1] + '-' + laterDate[0]) / 1000);
    var initTime      = ('' + _filter.initTime).substr(16, 8);
    var laterTime     = ('' + _filter.laterTime).substr(16, 8);
    var channelsArray = (_filter.channels.length !== 0) ? _filter.channels : Object.keys(getChannels());

    var agentsArray = (_filter.agents.length !== 0) ? _filter.agents : getAgentIds();

    var columns = [];
    for (var i = 0, ii = _selected.length; i < ii; ++i) columns.push(_selected[i].label);

    return {
      FILTER_ACD_ID: _filter.contactnets,
      FILTER_AGENT_ID: agentsArray,
      FILTER_CHANNEL_ID: channelsArray,
      FILTER_START_DATE: initDate,
      FILTER_END_DATE: laterDate,
      FILTER_TIMEPATTERN: _filter.timePattern,
      FILTER_TOP: -1,
      FILTER_START_TIME: initTime,
      FILTER_END_TIME: laterTime,
      FILTER_COLUMNS: columns,
      defaultGrid: 'ACD',
      export: format
    };
  }

  function filterStats() {
    var defered = $q.defer();
    var filter = _getBackFilter();

    notification.startLoadRequest();
    _filterStats(filter).then(function (response) {
      if (response.status === 200) {
        _stats.length = 0;
        angular.extend(_stats, response.data);
        defered.resolve(_stats);
        ++_currentRequest;
      }
      notification.finishLoadRequest();
    });

    return defered.promise;
  }

  function downloadXLSStats() {
    var defered = $q.defer();
    var filter = _getBackFilter('XLS');

    _downloadXLSStats(filter).then(function (response) {
      if (response.status === 200) {
        var blob = new Blob([response.data], {type: 'application/vnd.ms-excel'});
        var objectUrl = window.URL.createObjectURL(blob);
        window.open(objectUrl);
      }
      notification.finishLoadRequest();
    });

    return defered.promise;
  }

  function getCurrentRequest() {
    return _currentRequest;
  }

  function incrementCurrentRequest() {
    return ++_currentRequest;
  }

  function getFilter() {
    return _filter;
  }

  function getChannels() {
    return configuration.channelsNames;
  }

  function getTimePattern() {
    return configuration.statsTimePattern;
  }

  function getFormatTimePattern() {
    return configuration.formatTimePattern[_filter.timePattern];
  }

  function nextTimePattern() {
    var patterns = getTimePattern();
    for (var i = 0; i < (patterns.length - 1); ++i) {
      if (patterns[i] === _filter.timePattern) {
        _filter.timePattern = patterns[++i];
        return filterStats();
      }
    }
  }

  function filterByContactnet(contactnetId) {
    _filter.contactnets = [contactnetId];
    return filterStats();
  }

  function filterByAgent(agentId) {
    _filter.agents = [agentId];
    return filterStats();
  }

  function setChannel(channelId) {
    _filter.channels = [channelId];
  }

  function showContactnetById(contactnetId) {
    for (var i = 0, ii = _acds.length; i < ii; ++i) {
      /*jshint eqeqeq:false*/
      if (_acds[i].id == contactnetId) return _acds[i].description;
    }
  }

  function showAgentById(agentId) {
    for (var i = 0, ii = _agents.length; i < ii; ++i) {
      /*jshint eqeqeq:false*/
      if (_agents[i].id == agentId) return _agents[i].name;
    }
  }

  function getAgentIds() {
    var agentIds = [];
    for (var i = 0, ii = _agents.length; i < ii; ++i) {
      agentIds.push(_agents[i].id);
    }
    return agentIds;
  }

  /** Server Request **/

  function _getDefaultColumnsFilter(mode, level) {
    var _backMode = _getBackendMode(mode, level);
    return $http.get('/multichannel/getdefaultcolumnsstats/type/' + _backMode)
      .then(notification.responseHandler())
      .catch(notification.errorHandler);
  }

  function _getColumnsFilter(mode, level) {
    var _backMode = _getBackendMode(mode, level);
    return $http.post('/charts/getcolumnsfilter', {type: _backMode})
      .then(notification.responseHandler())
      .catch(notification.errorHandler);
  }

  function _getMyACDs() {
    return $http.get('/charts/getqueuesforacdmanager')
      .then(notification.responseHandler())
      .catch(notification.errorHandler);
  }

  function _getMyAgents() {
    return $http.get('/charts/getmyagents')
      .then(notification.responseHandler())
      .catch(notification.errorHandler);
  }

  function _getStatsURL() {
    switch (_mode + _level) {
      case 'agent1':
        return '/multichannel/getagentconversationstats';
      case 'agent2':
        return '/multichannel/getagentstats';
      case 'agent3':
        return '/multichannel/getagentsdetail';
      case 'contactnet1':
      case 'contactnet2':
        return '/multichannel/getconversationstats';
      case 'contactnet3':
        return '/multichannel/getconversationsdetail';
      case 'issue1':
        return '/multichannel/getissuestats';
      default:
        return '/multichannel/getconversationstats';
    }
  }

  function _filterStats(filter) {
    var url = _getStatsURL();

    return $http.post(url, filter)
      .then(notification.responseHandler())
      .catch(notification.errorHandler);
  }

  function _downloadXLSStats(filter) {
    var url = _getStatsURL();

    return $http({
      url: url,
      method: 'POST',
      data: filter,
      headers: {
        'Content-type': 'application/json'
      },
      responseType: 'arraybuffer'
    }).then(notification.responseHandler())
      .catch(notification.errorHandler);
  }

  function _getBackendMode(mode, level) {
    switch (mode + level) {
      case 'agent1':
        return 'agent';
      case 'agent2':
        return 'reportagentsactivity';
      case 'agent3':
        return 'agentdetail';
      case 'contactnet1':
        return 'multichannelgroup';
      case 'contactnet2':
        return 'contactnet';
      case 'contactnet3':
        return 'conversationsdetail';
      case 'issue1':
        return 'issues';
    }
  }

};
