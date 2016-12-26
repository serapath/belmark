var marked = require('marked')
var bel = require('bel')
var belmark = require('../source/belmark')

var xmp = document.createElement('xmp')

document.body.appendChild(bel`
  <div>
    <h1> usage: </h1>
    <xmp>${`
      var el = document.createElement('span')
      el.innerHTML = 5+5

      var markdown = '# awesome'

      var element = belmark\`
        # title
        * normal text
        * before \${el} after
        * next come: markdown, html, dom
        * \${markdown}
        * \${marked(markdown)}
        * \${bel([marked(markdown)])}

        \\\`\\\`\\\`js
          var x = 5
        \\\`\\\`\\\`
      \`

      document.body.appendChild(element)

      var element2 = belmark(\`
        # title
        * normal text
        * before \${el} after
        * next come: markdown, html, dom
        * \${markdown}
        * \${marked(markdown)}
        * \${bel([marked(markdown)])}
        \\\`\\\`\\\`js
          var x = 5
        \\\`\\\`\\\`
      \`)

      document.body.appendChild(element2)
    `}</xmp>
    <h1> result: </h1>
  </div>
`)


var el = document.createElement('span')
el.innerHTML = 5+5

var markdown = '# awesome'

var element = belmark`
  # title
  * normal text
  * before ${el} after
  * next come: markdown, html, dom
  * ${markdown}
  * ${marked(markdown)}
  * ${bel([marked(markdown)])}

  \`\`\`js
    var x = 5
  \`\`\`
`

document.body.appendChild(element)
element.style='background-color: red; color: white;'

var element2 = belmark(`
  # title
  * normal text
  * before ${el} after
  * next come: markdown, html, dom
  * ${markdown}
  * ${marked(markdown)}
  * ${bel([marked(markdown)])}

  \`\`\`js
    var x = 5
  \`\`\`
`)

document.body.appendChild(element2)
element2.style='background-color: blue; color: white;'
