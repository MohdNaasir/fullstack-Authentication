import mongoose from "mongoose";
 
import dotenv from "dotenv"
dotenv.config({})
 

 const connectDb =  async () => {
    try {
        const connect =   await mongoose.connect(process.env.MONGO_URI)
        if(connect){
            console.log("database connected");
            
        }
        else{
            console.log("database disconnected");
        }
    } catch (error) {
        console.log(error);
        
        
    }


 }
 export default connectDb