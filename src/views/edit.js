const html = require('choo/html')
const header = require('../components/site-header')

module.exports = (state, prev, send) => html`
  <main>
    ${header()}
    <section class="container color-white well center-text">
      <div id="editor"></div>
    </section>
  </main>
`
