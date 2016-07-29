const dnd = require('../lib/fileDnd')

module.exports = {
  namespace: 'dnd',
  state: {
    fileContent: ''
  },
  subscriptions: [],
  reducers: {
    updateFileContent: (data, state) => ({fileContent: data})
  },
  effects: {
    'onLoadFile': (data, state, send, done) => send('dnd:updateFileContent', data, done)
  },
  subscriptions: [
    (send, done) => {
      window.addEventListener("message", receiveMessage)

      function receiveMessage(event) {
        if (event.data && event.data.source === 'dnd') {
          console.log('from event ', event.data.payload);
          send('dnd:onLoadFile', event.data.payload, done)
        }
      }
    }
  ]
}
