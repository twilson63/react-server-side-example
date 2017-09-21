const express = require('express')
const app = express()
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const Matrix = require('@jrs/matrix')

//app.use(express.static('.'))

app.get('/bundle.js', (req, res) => {
  res.sendFile(__dirname + '/node_modules/@jrs/matrix/dist/bundle.umd.js')
})

app.get('/', (req, res) => {
  // <h1 onClick={e => alert('foo')}>Hello There</h1>
  res.send(
    `
<div>
  ${ReactDOMServer.renderToString(
    React.createElement(Matrix, { onClick: e => alert('hello') }, 'Hello There')
  )}
</div>
<script src="/bundle.js"></script>
`
  )
})

app.listen(3000)
