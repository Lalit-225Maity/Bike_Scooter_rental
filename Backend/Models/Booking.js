const { Schema, model } = require('mongoose');
const Book = new Schema({
    User_ID: {
        type: Schema.Types.ObjectId,
        ref: "User",

    },
    User_Name: {

        type: String
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
    model_image: {
        type: String
    },
    Payment_price: {
        type: String
    },
    Payment_method: {
        type: String
    }
})
const Booking = model("Book", Book);
module.exports = Booking
