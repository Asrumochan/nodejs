import express from 'express'
import fs from "fs"
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

let app=express();
app.use(bodyParser.json())
mongoose.connect('mongodb://127.0.0.1:27017/asru')
.then(()=>{console.log("MongDB connected")})
.catch((err)=>{console.log(err)
    process.exit(1)})
const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    }
})

const User = mongoose.model('user',userSchema)

let getEmployees=()=>{
    let employees=fs.readFileSync("emp.json","utf-8");
    return JSON.parse(employees);
}
let saveEmployees=(employees)=>{
    fs.writeFile("emp.json",JSON.stringify(employees),(err)=>{
        if(err) throw err
    });
}
app.get("/read",(req,resp)=>{
    let employees = getEmployees()
    resp.send(employees)
})
app.post("/create",(req,resp)=>{
    let emp=req.body;
    const result = User.create({
        id:emp.id,
        name:emp.name,
        salary:emp.salary
    })
    console.log(result)
    resp.status(201).send({"msg":"data entered"})
})

app.put("/update/:id",(req,resp)=>{
    let emp=req.body;
    let id=Number(req.params.id);
    let employees=getEmployees();   
    let flag=employees.find((employee)=>{
        return employee.id===id;
    })
    if(!flag){
        return resp.send({"msg":"empployee does not exist "})
    }
    let newEmployees=employees.filter((employee)=>{
        return employee.id !== id
    })
    newEmployees.push(emp)
    saveEmployees(newEmployees)
    resp.send({"msg":"data updated"})
})

app.patch("/patch/:id",(req,resp)=>{
    let id=Number(req.params.id);
    let emp=req.body;
    let prop=Object.keys(emp)[0];
    console.log(prop);
    let val=Object.values(emp)[0];
    console.log(val);
    let employees=getEmployees()
    let flag=employees.find((employee)=>{
        return employee.id===id;
    })
    if(!flag){
        return resp.send({"msg":"employee does not exist "})
    }
    let newEmployee=employees.filter((employee)=>{
        return employee.id === id
    }) 
    let newEmployees=employees.filter((employee)=>{
        return employee.id !== id
    })
  
      let newEmployee1={...newEmployee[0],[prop]:val}
    newEmployees.push(newEmployee1)
    saveEmployees(newEmployees)
    resp.send({"msg":"data updated"})

})
app.delete("/delete/:id",(req,resp)=>{
    let id=Number(req.params.id);
    let employees=getEmployees();

    let flag=employees.find((employee)=>{
        return employee.id===id
    })
    if(!flag){
        return resp.send({"msg":"employee does not exist"})
    }
    let newEmployees=employees.filter((employee)=>{
        return employee.id!=id;
    })
    saveEmployees(newEmployees);
    resp.send({"msg":"Employee data deleted"})

})
app.listen(8000,(err)=>{
    if(err) throw err
    console.log('Server is running at 8000')
})