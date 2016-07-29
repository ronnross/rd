const CodeMirror = require('codemirror')

const editArea = document.createElement('textarea')
const editorTarget = document.getElementById('editor')
editorTarget.appendChild(editArea)

setTimeout(function() {
  let editor = CodeMirror.fromTextArea(editArea, {
    lineNumbers: true,
    autofocus: true
  });

  editor.on('change', function(e) {
    window.postMessage({
      source: 'editor',
      payload: e.getValue()
    }, '*')
  })
}, 0);
