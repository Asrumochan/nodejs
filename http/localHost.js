//const http =require('http');
import http from 'http'
const server =http.createServer((req,resp)=>{
    resp.end("Hello , Http server,,,,...............................")
})

server.listen(8000,(err)=>{
    if(err) throw err
    console.log("Server is running.......................................'")
})