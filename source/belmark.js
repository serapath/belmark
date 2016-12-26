var bel = require('bel')
var marked = require('marked')

module.exports = belmark

function belmark (source, opts) {
  if (opts) marked.setOptions(opts)
  var container = document.createElement('div')
  container.innerHTML = marked(source)
  return bel`${container}`
}
