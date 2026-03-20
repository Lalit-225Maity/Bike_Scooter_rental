const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
const cookie=require('cookie-parser');
const connectDb = require('./Database/db');
connectDb();
app.use(cookie());
const item = require('./Router/Vehicle')
app.use('/api', item);
const user=require('./Router/User');
app.use('/api',user);
const port = process.env.PORT || 4000;
app.listen(port, (req, res) => {
    console.log(`server running at ${port}`);

})