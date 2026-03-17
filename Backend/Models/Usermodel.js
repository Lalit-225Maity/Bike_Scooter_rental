const { Schema, model } = require('mongoose');
const User = new Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    ContactInfo: {
        type: String,
        required: true
    },
    EmailID: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    }

})
const Users=model("User",User);
module.exports=Users;