const html = require('choo/html')

module.exports = (state, prev, send) => html`
  <header class="navbar-fixed">
    <nav class="nav-wrapper">
      <a href="/" class="brand-logo">razzle dazzle</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/edit">Edit</a>
        </li>
        <li>
          <a href="/libout">About</a>
        </li>
      </ul>
    </nav>
  </header>
`
