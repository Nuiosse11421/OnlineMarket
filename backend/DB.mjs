import { MongoClient } from "mongodb";

const url = "mongodb+srv://noticegameacc:11473@dbmarket.rs9by.mongodb.net/ONLINEMARKET?retryWrites=true&w=majority&appName=DBMarket";
const client = new MongoClient(url)


async function connectDB(){
    try{
        await client.connect();
        console.log("Connected to mongodb")
    }catch(err){
        console.error("Failed to connect to MongoDB", err.message);
        throw err;
    }
}

export default connectDB;