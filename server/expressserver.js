/*import express from "express"
import dotenv from "dotenv";
dotenv.config();
const port=process.env.PORT || 3002;
const app=express();
const userdata=[{
    id: 1,
    name: "dhruwajita",
    email:"dhruwajita.devi@gmail.com"
},

{id: 2,
    name: "dhruwajitadevi",
    email:"dhruwajita.devi@hotmail.com"
}
]
app.use(express.json());
app.get("/",(req,res)=>{
res.sendStatus(200).json({
message:"welcome user"

})

})

app.get("/",(req,res)=>{
    try{
res.status(200).json({message:"data received", userdata
    })
}


catch(err){
console.error("Error:", err.message)

}

})
app.post("/create",(req,res)=>{

    try{

        const {name,email}=req.body;
        const newUser={
            id: userdata.length+1,
            name,
            email
        }
        userdata.push(newUser);
        res.status(201).json({message:"user created successfully", newUser})
    }

    catch(err){
        console.error("error",err.message)
    }

})
app.get("/user/:id",(req,res)=>{

try{
    const id=req.params.id;
    const user=userdata.find9((u)=>u.id==id);
    if(user){
        return res.status(400).json({message: "user not found"})
    }
    res.status(200).json({message:"data received",user})
}
catch(err){
    console.error("Error:",err.message)
}
})

app.listen(port,()=>{

console.log(`server is running on port ${port}`)

})*/
import express from "express"
import dotenv from "dotenv";
dotenv.config();
const port=process.env.PORT|| 3002;
const app=express();
const userdata=[{
    id:1,
    name:" Divya Verma",
    email: "divya@gmail.com"
},
{
     id:2,
    name:" saurabh Verma",
    email: "saurabh@gmail.com"


}]
app.use(express.json());
app.get("/",(req,res)=>{
        res.status(200).json({
      message: "Welcome User"  
    })
})
app.get("/users",(req,res)=>{
    try{
        res.status(200).json({message: "data received",userdata})
    }
    catch(err)
    {
        console.error("Error:",err.message)
    }
})

app.post("/create",(req,res)=>{
    try{
        const {name,email}=req.body;
        const newUser={
            id: userdata.length+1,
            name,
            email
        }

        userdata.push(newUser);
        res.status(201).json({message: "user created successfully",newUser})
    }
    catch(err){
        console.error("Error:",err.message)
    }
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)

})