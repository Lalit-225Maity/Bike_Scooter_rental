const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
const connectDb = require('./Database/db');
connectDb();
const item = require('./Router/Vehicle')
app.use('/api', item)
const port = process.env.PORT || 4000;
app.listen(port, (req, res) => {
    console.log(`server running at ${port}`);

})