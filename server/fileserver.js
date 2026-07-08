import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs/promises"
dotenv.config();
const port= process.env.PORT|| 3002;
const app=express();
const userdata=[];
app.use(cors());
app.use(express.json()); //middleware
const loadUser=async()=>{
const rdata=await fs.readFile("userdata.json","utf-8",(err,data)=>{
        if(err){
            console.log("Error",err);
            throw err;
        }
        console.log(data);
        return (data);
    })
    const result=JSON.parse(rdata);
    userdata.push(result);
}
// loadUser();
app.get("/",(req,res)=>{
    res.status(200).json({
        message: "Welcome User"
    })
})
app.get("/users",async(req,res)=>{
    try{   
  
 res.status(200).json({message: "data received",userdata})
    }
    catch(err){
    console.error("Error:",err.message)
    }
 
})
app.get("/user/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const user=userdata.find((u)=>u.id==id);
        if(!user){
       return res.status(400).json({message: "user not found"})     
        }
       res.status(200).json({message: "data received",user})
    }
    catch(err){
    console.error("Error:",err.message)
    }
 
})
app.post("/create",async(req,res)=>{
   try{
    const {name,email}=req.body;
    const newUser={
        id: Date.now(),
        name,
        email
    }
    userdata.push(newUser);
    await fs.writeFile("userdata.json",JSON.stringify(userdata,2));
    res.status(201).json({message: "user created successfully",newUser})
   }
   catch(err){
    console.error("Error",err.message)
   }
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})