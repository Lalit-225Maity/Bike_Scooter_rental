const { Schema, model } = require('mongoose');
const Book = new Schema({
    User_ID: {
        type: Schema.Types.ObjectId,
        ref: "User",

    },
    User_FirstName: {

        type: String
    },
    User_LastName:{
        type:String
    },
    model_name: {
        type: String,

    },
    recieve_date: {
        type: String,

    },
    end_date: {
        type: String,

    },
    User_Contact:{
        type:String
    },
    User_Email:{
        type:String
    },
    model_image: {
        type: String
    },
    Payment_price: {
        type: String
    },
    Payment_status: {
        type: String
    }
})
const Booking = model("Book", Book);
module.exports = Booking
