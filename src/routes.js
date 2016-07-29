module.exports = route => [
  route('/', require('./views/home')),
  route('/edit', require('./views/edit')),
  route('/about', require('./views/about'))
]
