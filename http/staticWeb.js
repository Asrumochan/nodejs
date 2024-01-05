import http from "http";
import fs from "fs"
let server =http.createServer((req,resp)=>{
    if(req.url ==="/index"){
        fs.readFile('views/index.html','utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
       }
})

server.listen(8080,(err)=>{
    if(err) throw err;
    console.log(`server is running on ${8080} port`)
})