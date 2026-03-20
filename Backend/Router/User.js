const express = require('express');
const router = express.Router();
const { createUser, OTPsend, verifyOTP, Login } = require('../Controller/User');
const Authentication = require('../Middleware/Auth');
router.post('/signup', createUser);
router.post('/otp', OTPsend);
router.post('/otpverify', verifyOTP);
router.post('/login', Login);
module.exports = router;