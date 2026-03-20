const jwt = require('jsonwebtoken');
const User = require('../Models/Usermodel');
const sendEmail = require('../EmailSender/OTPsender');
const OTPs = require('../Models/OTP');
const dotenv = require('dotenv');
 
dotenv.config();
const createUser = async (req, res) => {
    try {
        const { FirstName, LastName, ContactInfo, EmailID, Gender } = req.body;
        if (typeof FirstName !== "string" && typeof LastName !== "string") {
            return res.status(404).json({
                message: "something went wrong"
            })
        }
        if (ContactInfo.length !== 10) {
            return res.status(404).json({
                message: "Phone Number must be 10 digits"
            })
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EmailID)) {
            return res.status(404).json({
                message: "Invalid Email ID"
            })
        }
        const emails = await User.findOne({ EmailID });
        if (emails) {
            return res.status(409).json({
                message: "User is Already Exists"
            })
        }
        const Customer = new User({
            FirstName, LastName, ContactInfo, EmailID, Gender
        })
        const token = jwt.sign({ id: Customer._id, Email: Customer.EmailID }, process.env.SECRET_KEY);
        res.cookie("token", token);
        await Customer.save();
        res.status(200).json({
            success: true,
            message: "User signup",
            Customer: Customer
        })


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

}
const Login = async (req, res) => {
    try {
        const { Email } = req.body;
        const FindEmail = await User.findOne({ EmailID: Email });
        if (!FindEmail) {
            return res.status(404).json({
                message: "User is Not Found!"
            })
        }
        const token = jwt.sign({ id: FindEmail._id, Email: FindEmail.EmailID }, process.env.SECRET_KEY);
        res.cookie("token", token);
        res.status(200).json({
            success: true,
            Users: FindEmail
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const OTPsend = async (req, res) => {
    try {
        const { EmailID } = req.body;
        const verifyemail = await User.findOne({ EmailID });
        if (!verifyemail) {
            return res.status(404).json({
                message: "User not Found"
            })

        }
        const otp = Math.floor(100000 + Math.random() * 999999);
        console.log(otp)
        const OTPgenerate = new OTPs({ Email: EmailID, OTP: otp });
        await OTPgenerate.save();
        const message = `we send a verification code ${otp}`
        await sendEmail(EmailID, "reset Password", message);

        res.status(200).json({ message: "OTP generated successfully", OTPgenerate });



    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
const verifyOTP = async (req, res) => {
    try {
        const { OTP, Email } = req.body;
        const verifyUser = await OTPs.findOne({ Email, OTP });
        if (!verifyUser) {
            return res.status(404).json({
                message: "Invalid OTP"
            })
        }
        await OTPs.deleteMany({});
        res.status(200).json({
            message: "OTP verification successfull",
            verifyUser:verifyUser
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
 
module.exports = { createUser, OTPsend, verifyOTP,Login }