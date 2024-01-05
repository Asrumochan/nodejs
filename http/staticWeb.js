import http from "http";
let server =http.createServer((req,resp)=>{
    resp.end("<h1>Hello world</h1>")
})

server.listen(8080,(err)=>{
    if(err) throw err;
    console.log(`server is running on ${8080} port`)
})