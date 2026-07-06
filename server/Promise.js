function register(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
     console.log("Register Here");
    },8000)   
    })
   
    
}
function sendEmail(){
    return new Promise(() => {
      setTimeout(()=>{
      console.log("Send Email");
    },2000)   
    })
   
    
}
function login(){
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
       console.log("Login Here");
    },1500)  
    })
   
  
}
function getData(){
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
console.log("fetch data");

    },4000)  
    })
   
    
}
function displayData(){
    return new Promise((resolve, reject) => {
     setTimeout(()=>{
    console.log("Display Data");
    },3000)    
    })
   
    
}

register().then(sendEmail)
          .then(login)
          .then(getData)
          .then(displayData)
          .catch((err)=>{
            console.log("Error",err.message)
          })

 console.log("call other Application");
