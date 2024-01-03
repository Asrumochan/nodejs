const http =require('http');

const server =http.createServer((req,resp)=>{
    resp.end("Hello , Http server,,,,")
})

server.listen(8000,(err)=>{
    if(err) throw err
    console.log("Server is running.....")
})