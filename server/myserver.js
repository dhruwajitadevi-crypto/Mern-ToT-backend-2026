import express from "express";
import dotenv from "dotenv";
import { connect } from "mongoose";
 import router from "./routes/userRoutes.js";
import dbConn from './config/db.js';
dotenv.config();
const port=process.env.PORTc|| 3001;

const app=express();
dbConn();
app.use(express);
app.use(router);
app.listen(port,()=>{

console.log(`server is running at port${port}`)

})