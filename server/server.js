/*
//API /msg

import http from "http";
const server=http.createServer((req,res)=>{

const url=req.url;
const method=req.methos;
if(url=="/msg" && method=="GET"){
res.write("welome user");
res.end();

}

else{
res.statusCode=404;
res.end("error page");
}

})

server.listen(3001,()=>{

    console.log("server is running on 3001")
})
*/


/*
//API /system

import http from "http";
import os from "os";

const server=http.createServer((req,res)=>{

const url=req.url;
const method=req.method;
if(url=="/msg" && method=="GET"){
res.write("welome user");
res.end();

}

else if(url=="/system" && method=="GET"){

    const sysdata={

        platform:os.platform(),
        arch:os.arch(),
        cpu:os.cpus().length,
        ip:os.networkInterfaces(),
        TotalMemory:(os.totalmem()/1024**3).toFixed(2)+"GB",
        FreeMemory:(os.freemem()/1024**3).toFixed(2)+"GB",
    }

    res.end(JSON.stringify(sysdata));
}

else
    {
res.statusCode=404;
res.end("error page");
}

})

server.listen(3001,()=>{

    console.log("server is running on 3001")
})*/

//API /users

import http from "http";
import os from "os";
const userdata=[{
id: "101",
Name:"Dhruwajita",
email:"dhruwajita.devi@gmail.com"

},

{
id: "102",
Name:"Dhruwajita1",
email:"dhruwajita1.devi@gmail.com"

}
]

const server=http.createServer((req,res)=>{

const url=req.url;
const method=req.method;
if(url=="/msg" && method=="GET"){
res.write("welome user");
res.end();

}

else if(url=="/systems" && method=="GET"){

    const sysdata={

        platform:os.platform(),
        arch:os.arch(),
        cpu:os.cpus().length,
        ip:os.networkInterfaces(),
        TotalMemory:(os.totalmem()/1024**3).toFixed(2)+"GB",
        FreeMemory:(os.freemem()/1024**3).toFixed(2)+"GB",
    }

    res.end(JSON.stringify(sysdata));
}
else if (url=="/users" && method=="GET"){

    res.end(JSON.stringify(userdata))
}
else if (url.startsWith("/user/") && method=="GET"){
    const id=url.split("/")[2];
    const user=userdata.find((u)=>u.id==id)
    if(!user){return res.end("user not defined")

    }

    res.end(JSON.stringify(user))}

    else if(url=="/create" && method=="POST"){
        
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
    })
req.on("end",()=>{
const data=JSON.parse(body);
const newUser={
id: data.id,
name: data.name,
email: data.email
}

userdata.push(newUser);

})

res.statusCode=201;
res.end("user created successfully");

}

else if(url.startsWith("/delete/") && method=="DELETE")
{
const id=url.split("/")[2];
const userIndex=userdata.findIndex((u)=>u.id==id);
if(userIndex==-1)
    {return res.end("user not found");}

    userdata.splice(userIndex,1);
            res.end("user deleted successfully");

    }

else if(url.startsWith("/edit/") && method=="PUT"){

const id= url.split("/")[2];
const userIndex=userdata.findIndex((u)=>u.id==id);
if(userIndex==-1)
{
return res.end("user not found")

}
let body="";
req.on("data",(chunk)=>{

    body=body+chunk;

})
req.on("end",()=>{

    const newdata=JSON.parse(body);
    userdata[userIndex]={
id,
name: newdata.name,
email:newdata.email

    }
})
res.end("user updated successfully");
}

else
    {
res.statusCode=404;
res.end("error page");
}

})

server.listen(3001,()=>{

    console.log("server is running on 3001")
})



