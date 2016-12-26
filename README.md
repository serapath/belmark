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
var el   = belmark(markdown, opts)

document.body.appendChild(el)
// or
document.body.appendChild(bel`
  # Hello
  * world
`)
```

for more details see: [demo](https://serapath.github.io/belmark)

# api

`var element = belmark(markdown, opts)`

* `source` - Markdown source String
* `opts` - Marked options
  * check [marked](https://www.npmjs.com/package/marked) for available options

# related
inspiration came from
* https://www.npmjs.com/package/beldown
* https://www.npmjs.com/package/element-markdown
