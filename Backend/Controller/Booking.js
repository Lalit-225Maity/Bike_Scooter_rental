const Book = require('../Models/Booking');
const payment = require('../Models/Payment');
const users = require('../Models/Usermodel')
const BookVehicle = async (req, res) => {
    try {
        const user = req.user;
        const {
            recieve_date,
            end_date,
            model_image } = req.body;
        const Payment_process = await payment.findOne({ UserID: user.id }).sort({ _id: -1 });;
        const User = await users.findOne({ _id: user.id })
        const UserBook = new Book({
            User_ID: user.id,
            recieve_date,
            end_date,
            model_image,
            Payment_price: Payment_process.Price,
            Payment_method: Payment_process.method,
            User_Name: User.FirstName
        })
        await UserBook.save();
        res.status(200).json({
            success: true,
            message: "Booking complete",
            UserBook: UserBook
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const getBook = async (req, res) => {
    try {
        const user = req.user;
        const BookDetails = await Book.find({ User_ID: user.id });
        res.status(200).json({
            BookDetails
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
module.exports = { BookVehicle,getBook }