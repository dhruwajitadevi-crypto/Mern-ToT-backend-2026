import express from "express";
import User from "../models/User.js"

export const createUser=async(req,res)=>{
    try{
        const{name,email}=req.body;
        const newUser={
            id:Date.now(),
            name,email
        }
        await UserActivation.save(newUser);
    }
catch(err){
 console.log("Error:err")
}
}

