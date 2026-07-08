import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
id:{
type:Number,
required: true,
unique:true
},
name:{
    type:String
},
email:
{
    type:String
}


}


)

export default new mongoose.model("user",userSchema);
