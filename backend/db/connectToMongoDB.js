import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

console.log("Database Name:  " + process.env.MONGODB_URL);

const connectToMongoDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
        
    }
    catch(error){
       console.log("Error while connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;