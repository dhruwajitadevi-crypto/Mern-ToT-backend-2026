import mongoose from "mongoose";
//import dotenv from "dotenv";
import 'dotenv/config';
import dotenv from "dotenv"
dotenv.config();
const URL=process.env.MONGO_URL;
const connectDB=async()=>{
    try{

await mongoose.connect(URL);
console.log("Mongodb connected")

    }
    catch(err){
    console.error("Error:",err.message)
}

}

export default connectDB;