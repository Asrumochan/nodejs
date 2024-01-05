//const http =require('http');
import http from 'http'
import dotenv from 'dotenv'
dotenv.config({path:'./config/.config'})
let port = process.env.PORT
const server =http.createServer((req,resp)=>{
    resp.end("Hello , Http server,,,,...............................")
})

server.listen(port,(err)=>{
    if(err) throw err
    console.log(`Server is running on ${port}`)
})