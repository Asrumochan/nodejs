import url from 'url'
import http from 'http'

let server = http.createServer((req,res)=>{
    let reqUrl = url.parse(req.url,true)
    console.log(reqUrl)
    console.log("welcome to server !");
    res.end(`HII ${reqUrl.query.name} welcome to my server!`)
})

server.listen(8000,(err)=>{})