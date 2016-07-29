const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')

module.exports = (state, prev, send) => html`
  <main>
    ${header()}
    <section class="container">
      <div id="dropzone" class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="/static/images/presentation.png">
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">Add Presentation</span>
          <p><a href="#">Drag your presentation onto the page.</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
      ${state.dnd.fileContent}
    </section>
    ${footer()}
  </main>
`
