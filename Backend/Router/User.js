const express = require('express');
const router = express.Router();
const { createUser, OTPsend, verifyOTP, Login,Logout,Checktoken } = require('../Controller/User');
const{PaymentProcess}=require('../Controller/Payment');
const{BookVehicle,getBook}=require('../Controller/Booking')
const Authentication = require('../Middleware/Auth');
router.post('/signup', createUser);
router.post('/otp', OTPsend);
router.post('/otpverify', verifyOTP);
router.post('/login', Login);
router.post('/logout',Logout);
router.post('/payment',Authentication,PaymentProcess);
router.post('/booking',Authentication,BookVehicle);
router.get('/bookdetails',Authentication,getBook);
router.get('/auth-user',Authentication,Checktoken);
module.exports = router;