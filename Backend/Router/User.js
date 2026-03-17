const express = require('express');
const router = express.Router();
const { createUser, OTPsend, verifyOTP } = require('../Controller/User');
router.post('/signup', createUser);
router.post('/otp', OTPsend);
router.post('/otpverify', verifyOTP);
module.exports = router;