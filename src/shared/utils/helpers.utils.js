'use strict';

// @ngInject
module.exports = function formatting() {
  return {
    isEmptyObject: isEmptyObject,
    getTimeByTimestamp: getTimeByTimestamp,
    getTimeBySeconds: getTimeBySeconds,
    getClockByDiff: getClockByDiff,
    getTimeStampAgoSeconds: getTimeStampAgoSeconds,
    showScreenPopup: showScreenPopup,
    splice: splice
  };

  function isEmptyObject(obj) {
    for (var name in obj) {
      return false;
    }
    return true;
  }

  function getClockByDiff(now, timeStamp) {
    var diff = new Date(now - timeStamp);
    var s    = zeroFormat(diff.getSeconds());
    var m    = zeroFormat(diff.getMinutes());
    var h    = diff.getHours() - 1;
    return h + ':' + m + ':' + s;
  }

  function getTimeByTimestamp(now, timeStamp) {
    var mins = ~~( ( now - timeStamp ) / 60000 );
    if (mins === 0) return 0;
    if (mins >= 1440) {
      return Math.floor(mins / 1440) + ' d';
    } else {
      return (mins >= 60) ? Math.floor(mins / 60) + ' h' : mins + ' m';
    }
  }

  function getTimeBySeconds(seconds, maxSteps) {
    if(!maxSteps) maxSteps = 2;
    seconds = Math.floor(seconds);
    var formatting = '';
    var step       = 0; //Only two steps

    if (seconds > 86400) {
      var days = ~~(seconds / 86400);
      seconds  = (seconds - 86400 * days);
      formatting += days + 'd ';
      ++step;
    }

    if (seconds > 3600 && step < maxSteps) {
      var hours = ~~(seconds / 3600);
      seconds   = (seconds - 3600 * hours);
      if (hours > 0) formatting += hours + 'h ';
      ++step;
    }

    if (seconds > 60 && step < maxSteps) {
      var min = ~~(seconds / 60);
      seconds = (seconds - 60 * min);
      if (min > 0) formatting += min + 'm ';
      ++step;
    }

    if (step < maxSteps) {
      formatting += seconds + 's';
    }

    return formatting;
  }

  function getTimeStampAgoSeconds(seconds) {
    return Date.now() - (seconds * 1000);
  }

  function zeroFormat(i) {
    if (i < 10) {
      return '0' + i;
    } else {
      return i;
    }
  }

  /** Show ScreenPopup to receive channelEntry **/
  function showScreenPopup(channelEntry) {
    var payload = channelEntry.context.msg.payload;
    switch (payload.contextURLType) {
      case 'IFRAME':
        window.doContextPOST(payload.contextURL, channelEntry.context, payload.contextURLSizeWidth, payload.contextURLSizeHeight, 'framePopup');
        break;
      case 'POPUP':
        window.doContextGET(payload.contextURL, channelEntry.context, payload.contextURLSizeWidth, payload.contextURLSizeHeight);
        break;
      case 'TAB':
        window.doContextPOST(payload.contextURL, channelEntry.context, payload.contextURLSizeWidth, payload.contextURLSizeHeight, '_blank');
        break;
      case 'NONE':
        break;
    }
  }

  function splice(index, numDeletes, item) {
    var copy;
    if (numDeletes !== 0) {
      var i = 0;
      for (var pos in this) {
        if (this[pos] && i === index) {
          copy = this[pos];
          delete this[pos];
        }
        i++;
      }
    }
    if (item) {
      for (var key in item) this[key] = item[key];
    }
    return copy;
  }

  /* jshint ignore: start */
  Object.prototype.splice = splice;
  /* jshint ignore: end */

};