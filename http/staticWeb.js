import fs from 'fs'
import http from 'http'

let server = http.createServer((req,resp)=>{
   if(req.url ==="/index"){
    fs.readFile('views/index.html','utf-8',(err,data)=>{
        if(err) throw err 
        resp.end(data)
    })
   }
    if(req.url ==="/about"){
    fs.readFile('views/about.html','utf-8',(err,data)=>{
        if(err) throw err 
        resp.end(data)
    })
   }
   if(req.url ==="/google.com"){
    fs.readFile('views/about.html','utf-8',(err,data)=>{
        if(err) throw err 
        resp.end(data)
    })
   }
})
server.listen(8080,(err)=>{
    if(err) throw err 
    console.log("Server is Running")
})