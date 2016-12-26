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
document.body.appendChild(belmark(markdown, opts))
```
