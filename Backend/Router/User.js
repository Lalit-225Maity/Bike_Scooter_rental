const express = require('express');
const router = express.Router();
const { createUser, OTPsend, verifyOTP, Login,Logout } = require('../Controller/User');
const{PaymentProcess}=require('../Controller/Payment')
const Authentication = require('../Middleware/Auth');
router.post('/signup', createUser);
router.post('/otp', OTPsend);
router.post('/otpverify', verifyOTP);
router.post('/login', Login);
router.post('/logout',Logout);
router.post('/payment',Authentication,PaymentProcess);
module.exports = router;