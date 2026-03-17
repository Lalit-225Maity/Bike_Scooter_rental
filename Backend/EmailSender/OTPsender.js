const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const sendEmail = async (Email, subject, message) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.senderemail,
                pass: process.env.password,
            }
        });
        await transporter.sendMail({
            from: process.env.senderemail,
            to: Email,
            subject,
            text: message
        })
    } catch (error) {
        console.log(error.message);

    }
}
module.exports = sendEmail