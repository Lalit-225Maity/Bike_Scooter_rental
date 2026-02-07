const { Schema, model } = require('mongoose');
const Vehicle = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number
    },
    mileage: {
        type: Number
    },
    payment: {
        type: String
    },
    image: {
        type: String
    },
    city: {
        type: [String]
    }

})
const Bike = new model("Vehicle", Vehicle);
module.exports = Bike;