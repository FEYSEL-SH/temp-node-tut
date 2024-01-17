const http = require('http');
const server = http.createServer((req, res) => {
// console.log(req)
if(req.url === '/'){
res.end('welcome to my server')
}
if(req.url === '/about'){
    res.end('welcome to my about page')
}

res.end(`

<h1>Oops</h1>
<p>we cant seem to find the page you are looking for</p>
<a href="/"> back home</a>
`)
    // res.write("wellcome to my server")
    // res.end()
})

server.listen(8000)