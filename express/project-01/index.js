import express from 'expres'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

let app=express();
app.use(bodyParser.json())
mongo ose.connect('mongodb://127.0.0.1:27017/asru')
.then(()=>{console.log("MongDB connected")})
.catch((err)=>{console.log(err)
    process.exit(1)})
const userSchema = new mongoose.Schema({
    name:{ 
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    }
},{timestamps:true})

const User = mongoose.model('user',userSchema)

app.get("/read",async (req,resp)=>{
    const allUsers=await User.find({})
    console.log(allUsers)
    const html=`<ul>
        ${allUsers.map((user)=>`<li>${user.name}</li>`).join('')}
    </ul>`
    resp.send(allUsers)
})
app.post("/create",async (req,resp)=>{
    let emp=req.body;
    if(!emp.name || !emp.salary){
        return resp.status(400).send({message:"All fields are required"})
    }
    const result = await User.create({
        id:emp.id,
        name:emp.name,
        salary:emp.salary
    })
    console.log(result)
    resp.status(201).send({"msg":"data entered"})
})

app.get("/read/:id",async (req,resp)=>{
    const user = await User.findById(req.params.id)
    console.log(user);
    return resp.send(user)
})

app.patch("/update/:id",async (req,resp)=>{
    await User.findByIdAndUpdate(req.params.id,{name:"Gopu"})
    resp.send({"msg":"data updated"})

})
app.delete("/delete/:id",async (req,resp)=>{
    await User.findByIdAndDelete(req.params.id)
    resp.send({"msg":"Employee data deleted"})

})
app.listen(8000,(err)=>{
    if(err) throw err
    console.log('Server is running at 8000')
})