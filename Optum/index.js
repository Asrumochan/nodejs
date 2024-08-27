import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';

const app= express()
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/asru")
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(8080,()=>{
        console.log('server started')
    })
})
.catch((err)=>{
    console.log(err);
})

const ContactSchema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
        },
    mobile:{
        type:Number
    }
},{
    versionKey: false
});

const Contact=mongoose.model('contacts',ContactSchema)

app.get('/contacts',async (req,res)=>{
    const contacts=await Contact.find()
    res.json(contacts)
})

app.post('/contacts',async (req,res)=>{
    let newContact= new Contact({
        name:req.body.name,
        email:req.body.email,
        mobile:req.body.mobile
    })
    
    let contact = await newContact.save();
    res.json({msg:'Contact created',contact})
    
})