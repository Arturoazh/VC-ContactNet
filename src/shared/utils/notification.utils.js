'use strict';

// @ngInject
module.exports = function notification($mdToast, $mdDialog, $filter) {
  var htmlNode = angular.element('html');

  return {
    showDialog: showDialog,
    showAlert: showAlert,
    showConfirm: showConfirm,
    responseHandler: responseHandler,
    errorHandler: errorHandler,
    showAlertToast: showAlertToast,
    hiddenAlertToast: hiddenAlertToast,
    getCallToast: getCallToast,
    showFabChat: showFabChat,
    startLoadRequest: startLoadRequest,
    finishLoadRequest: finishLoadRequest,
    notifyBrowser: notifyBrowser
  };

  function responseHandler(toast) {
    return function (response) {
      if (toast) showToast(response);
      finishLoadRequest();
      return response;
    };
  }

  function errorHandler(response) {
    showDialog(response);
    console.error('ERROR: ', response);

    finishLoadRequest();
    return response;
  }

  function showToast(response) {
    if (response.data && response.data.msg) {
      $mdToast.show(
        $mdToast.simple()
          .parent(document.getElementById('headerBar'))
          .content(response.data.msg)
          .position('top left')
          .hideDelay(3000)
      );
    }
  }

  function showAlertToast() {
    $mdToast.show({
      template: '<md-toast class="toast-alert md-center"><span flex>' + $filter('translate')('RECONNECTING_SOCKET')
      + '</span></md-toast>',
      parent: document.getElementById('headerBar'),
      hideDelay: 0,
      position: 'top'
    });
  }

  function hiddenAlertToast() {
    $mdToast.hide();
  }

  function showDialog(response) {
    if (response.data && response.data.msg) {
      var title;
      if (response.status === 200) {
        title = 'SUCCESS';
      }
      else {
        title = 'PROBLEM_OCCURRED';
      }

      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title($filter('translate')(title))
          .content(response.data.msg)
          .ariaLabel($filter('translate')(title))
          .ok($filter('translate')('ACCEPT'))
      );
    }
  }

  function showAlert(content, fn) {
    return $mdDialog.show(
      $mdDialog.alert()
        .title($filter('translate')('ALERT'))
        .content($filter('translate')(content))
        .ariaLabel($filter('translate')(content))
        .ok($filter('translate')('CLOSE'))
    ).then(function () {
             if (fn) fn();
           });
  }

  function showConfirm(content) {
    return $mdDialog.show(
      $mdDialog.confirm()
        .title($filter('translate')('CONFIRM'))
        .content($filter('translate')(content))
        .ariaLabel($filter('translate')(content))
        .ok($filter('translate')('ACCEPT'))
        .cancel($filter('translate')('CANCEL'))
    );
  }

  function getCallToast() {
    return $mdToast.simple()
      .content($filter('translate')('INCOMING_CALL'))
      .action($filter('translate')('ANSWER'))
      .highlightAction(false)
      .hideDelay(0)
      .position('top right');
  }

  function showFabChat() {
    angular.element(document.querySelector('#footerFabChat')).trigger('mouseenter');
  }

  function startLoadRequest() {
    htmlNode.addClass('waiting');
  }

  function finishLoadRequest() {
    htmlNode.removeClass('waiting');
  }

  function notifyBrowser(message) {
    if (!('Notification' in window)) {
      window.alert('This browser does not support desktop notification');
    }
    else {
      var browserNotification;
      if (window.Notification.permission === 'granted') {
        browserNotification = new window.Notification($filter('translate')(message));
      }
      else if (window.Notification.permission !== 'denied') {
        window.Notification.requestPermission(function (permission) {
          if (permission === 'granted') {
            browserNotification = new window.Notification($filter('translate')(message));
          }
        });
      }
      return browserNotification;
    }
  }

};