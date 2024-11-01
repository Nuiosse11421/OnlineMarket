import express from 'express';
import connectDB from './DB.mjs';

const app = express();
const port = 8712;


//connect server
connectDB().then(()=>{
  console.log('Database Connection established')
}).catch((err)=>{
  console.error('Database connection error: ' + err.message);
})

//api
app.get('/',(req,res)=>{
  res.send("It start to build web online market!");
})

app.listen(port, ()=>{
  console.log(`Server running on http://localhost:${port}`);
})