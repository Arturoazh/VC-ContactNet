'use strict';

module.exports = {

  chartMax: 10,
  liveConversations: {'voice': [], 'chat': [], 'email': [], 'twitter': [], 'internalChat': []},
  agentsStats: ['awt', 'aat', 'atCount'],
  supervisorInterval: 20000,
  agentInterval: 10000,
  realtimeInterval: 1000,
  weightList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  channelsIds: {
    'voice': 1,
    'chat': 2,
    'email': 3,
    'twitter': 4
  },
  channelsNames: {
    1: 'voice',
    2: 'chat',
    3: 'email',
    4: 'twitter'

  },
  statsTimePattern: ['month', 'week', 'day', 'hour', '15m'],
  formatTimePattern: {
    'month': 'MM/YYYY',
    'week': 'DD/MM/YYYY',
    'day': 'DD/MM/YYYY',
    'hour': 'DD/MM/YYYY hh:mm',
    '15m': 'DD/MM/YYYY hh:mm'
  },
  licences: {
    'voice': false,
    'chat': false,
    'email': false,
    'twitter': false
  },
  wysuwyg: {
    sanitize: false,
    toolbar: [
      {
        name: 'basicStyling',
        items: [
          'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '-', 'leftAlign', 'centerAlign',
          'rightAlign', 'blockJustify', '-'
        ]
      },
      {name: 'paragraph', items: ['orderedList', 'unorderedList', 'outdent', 'indent', '-']},
      {name: 'doers', items: ['removeFormatting', 'undo', 'redo', '-']},
      {name: 'colors', items: ['fontColor', 'backgroundColor', '-']},
      {name: 'links', items: ['image', 'hr', 'symbols', 'link', 'unlink', '-']},
      {name: 'tools', items: ['print', '-']},
      {name: 'styling', items: ['font', 'size', 'format']}
    ]
  }

};