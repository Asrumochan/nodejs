const url = require('url');
const http = require('http')

const server = http.createServer((req,res)=>{
    const myUrl = url.parse(req.url, true);
    res.end(JSON.stringify(myUrl.query.name))
}).listen(8000,(err)=>{
    if(err) throw err
    console.log(`Server started at http://localhost:8000`)
})
