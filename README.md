# belmark
creates dom nodes from markdown

# usage
`npm install belmark`

```js
var belmark = require('belmark')
var markdown = `
  # Hello
  * world
`
var opts = { gfm: false }
/****************************
  as function call
****************************/
var el   = belmark.call(opts, markdown)
// or with default `opts`
var el   = belmark(markdown)
document.body.appendChild(el)
/****************************
  as tagged template
****************************/
var el2 = bel.bind(opts)`
  # Hello
  * world
`
// or with default `opts`
var el2 = bel`
  # Hello
  * world
`
document.body.appendChild(el2)
```

for more details see: [demo](https://serapath.github.io/belmark)

# api

`var element = belmark.call(opts, source)`

* `source` - Markdown source String
* `opts` - options object for `marked` provided as `this` param
  * check [marked](https://www.npmjs.com/package/marked) for available options

# related
inspiration came from
* https://www.npmjs.com/package/beldown
* https://www.npmjs.com/package/element-markdown
