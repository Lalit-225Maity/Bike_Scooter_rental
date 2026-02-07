const express=require('express');
const app=express();
const item=require('./Router/Route');
app.use(express.json());
const dotenv=require('dotenv');
dotenv.config();
const connectDb=require('./Database/db');
connectDb();
app.use('/api',item)
const port=process.env.PORT||4000;
app.listen(port,(req,res)=>{
    console.log(`server running at ${port}`);
    
})