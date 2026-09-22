import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
       const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB}`)
       console.log(`\n MongoDb connected !! DB HOST :${connectionInstance.connection.host}`);
       
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1)
        
    }
}

export default connectDB;