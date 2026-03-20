const { Schema, model } = require('mongoose');
const PaymentDetails = new Schema({
    UserID: {
        type: String,
        required: true
    },
    UPI: {
        type: String,
        required: function(){
            return this.method==="UPI"
        }
    },
    Debit: {
        type: String,
        required: function(){
            return this.method==="CARD"
        }
    },
    QR: {
        type: String,
        required: function(){
            this.method==="QR CODE"
        }
    },
    status: {
        type: String,
        default: "Paid"
    },
    method: {
        type: String,
    },
    Price:{
        type:String,
        required:true
    }

})
const Payment = model("Payment", PaymentDetails);
module.exports = Payment;