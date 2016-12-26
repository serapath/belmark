var bel = require('bel')
var marked = require('marked')

module.exports = belmark

function belmark (source = '', ...values) {
  source = [].concat(source)
  var opts = this || {}

  marked.setOptions(opts)
  var _class = opts.classname || 'markdown'
  var _id = '{{'+Math.random()+'}}'
  var _source = marked(source.join(_id)).split(_id)
  var _values = values.map((v,i) => 'values['+i+']').concat()

  var fbody = 'return bel`<div class="'+_class+'">'
  _source.forEach((s,i)=>{
    var v = _values[i]!==undefined?'${'+_values[i]+'}':''
    fbody+=s+v
  })
  fbody += '</div>`'

  var render = new Function('bel', 'values', fbody)

  return render(bel, values)
}
