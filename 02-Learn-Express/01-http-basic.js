const http = require('http')

const server = http.createServer((req, res) => {
  console.log('Request method', req.method)

  const url = req.url

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text-html' })
    res.write('<h1>HOME_PAGE</h1>')
    res.end()
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000, () => {
  console.log('Server running on port http://localhost:5000')
})