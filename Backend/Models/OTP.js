const { Schema, model } = require('mongoose');
const OTP=new Schema({
    OTP:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    }
})
const OTPNumber=model("OTP",OTP);
module.exports=OTPNumber