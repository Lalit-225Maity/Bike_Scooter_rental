const Payment = require('../Models/Payment');
const bcrypt = require('bcrypt')
const PaymentProcess = async (req, res) => {
    try {
        const user = req.user;
        const { UPI, Debit, QR, status, method, Price } = req.body;
        let CompletePay;
        if (method === "UPI") {
            if (!/^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(UPI)) {
                return res.status(404).json({
                    message: "WRONG UPI ID"
                })
            }
            const salt = await bcrypt.genSalt(10);
            const Hash = await bcrypt.hash(UPI, salt);
            CompletePay = new Payment({
                UserID: user.id,
                method,
                UPI: Hash,
                Price,
                status,
            })
            await CompletePay.save();
            res.status(200).json({
                success: true,
                pay: CompletePay
            })

        }
        if (method === "CARD") {
            if (Debit.length !== 16) {
                return res.status(404).json({
                    message: "Invalid Debit Card"
                })
            }
            const salt = await bcrypt.genSalt(10);
            const Hash = await bcrypt.hash(Debit, salt);

            CompletePay = new Payment({
                UserID: user.id,
                method,
                Debit: Hash,
                Price,
                status,
            })
            await CompletePay.save();
            res.status(200).json({
                success: true,
                pay: CompletePay
            })

        }
        if (method === "QR CODE") {
            
        }

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}
module.exports={PaymentProcess}