import express from 'express';
import connectDB from './DB.mjs';
import sellerRoutes from './router/sellerRoutes.mjs'
const app = express();
const port = 8080;

app.use(express.json)
//connect server
connectDB().then(()=>{
  console.log('Database Connection established')
}).catch((err)=>{
  console.error('Database connection error: ' + err.message);
})

//api seller
app.use('/api/sellers', sellerRoutes);
//api
app.get('/',(req,res)=>{
  res.send("It start to build web online market!");
})

app.listen(port, ()=>{
  console.log(`Server running on http://localhost:${port}`);
})