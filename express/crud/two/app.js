import express from 'express'
import fs from "fs"
import bodyParser from 'body-parser';

let app=express();
app.use(bodyParser.json())
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
    let employees=getEmployees()
    let flag=employees.find((employee)=>{
        return employee.name===emp.name
    })
    if(flag){
       return resp.send({"msg":"Employee already exists"})
    }
    employees.push(emp);
    saveEmployees(employees);
    resp.send({"msg":"data entered"})
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
    let emp=req.body.name;


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
  
     let newEmployee1={...newEmployee[0],name:emp}
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