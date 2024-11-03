import { MongoClient } from "mongodb";
import mongoose from "mongoose";
const url = "mongodb+srv://noticegameacc:11473@dbmarket.rs9by.mongodb.net/ONLINEMARKET?retryWrites=true&w=majority&appName=DBMarket";
mongoose.set('strictQuery',true);

async function connectDB(){
    try{
        await mongoose.connect(url);
        console.log("MongoDB connected");
    }catch(err){
        console.error("Failed to connect : ", err);
        throw err;
    }
}
export default connectDB;