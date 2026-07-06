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

else
    {
res.statusCode=404;
res.end("error page");
}

})

server.listen(3001,()=>{

    console.log("server is running on 3001")
})


