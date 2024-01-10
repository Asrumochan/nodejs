import express from 'express'
import fs from 'fs'
let app =express();

var user = {
    "user5": {
        "id":5,
        "firstname":"Asrumochan",
        "lastname":"Parida",
        "email":"amp@gmail.com"
      }
}

var id = 3;
app.get('/getUsers',(req, resp)=>{
    fs.readFile("data.json", 'utf8',(err, data)=>{
        if(err) throw err
        resp.send(data);
    });
})

app.post('/addUser',(req,resp)=>{
    fs.readFile("data.json",'utf8',(err,data)=>{
        if (err) throw err
        data=JSON.parse(data)
        data["user5"] = user["user5"];
        resp.send(JSON.stringify(data))
    })
})

app.delete('/deleteUser',(req, resp)=> {
   fs.readFile( "data.json", 'utf8',(err, data)=> {
      data = JSON.parse( data );
      delete data["user" + 3];
      resp.end( JSON.stringify(data));
   });
})

app.listen(8080,(err)=>{
    console.log('server running..')
})

