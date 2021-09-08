const http = require('http')

const server = http.createServer((req, res)=>{
    res.write('<h1>123</h1>')
    res.write('<h2>123</h2>')
    res.write('<h4>123</h4>')
    res.write('<h4>123</h4>')
    res.end()
})
server.listen(3000, ()=>{
    console.log('Server is runnin');
})