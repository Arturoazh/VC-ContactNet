'use strict';

// @ngInject
module.exports = function dateFormatFilter() {
  return function (dateStr, format) {
    return moment(dateStr).format(format || 'DD/MM/YYYY' );
  };
};
