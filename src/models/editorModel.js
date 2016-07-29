const editor = require('../lib/editor')

module.exports = {
  namespace: 'editor',
  state: {
    content: ''
  },
  reducers: {
    updateEditor: (data, state) => ({content: data})
  },
  effects: {
    'onEditorChange': (data, state, send, done) => send('editor:updateEditor', data, done)
  },
  subscriptions: [
    (send, done) => {
      window.addEventListener("message", receiveMessage)
      function receiveMessage(event) {
        if (event.data && event.data.source === 'editor') {
        send('editor:onEditorChange', event.data.payload, done)
        }
      }
    }
  ]
}
