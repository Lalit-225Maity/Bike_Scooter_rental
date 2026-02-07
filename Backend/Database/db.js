const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
        });
        console.log('MongoDB connect');

    } catch (error) {
        console.log(error.message);

    }
}
module.exports = connectDB;