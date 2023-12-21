import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async ()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
      console.log(`\n Mongodb connected !! DB HOST: ${connectionInstance.connection.host }`)
    } catch(error){
        console.log("MongoDb connection error", error);
        process.exit(1)
    }
   
}

export default  connectDB
