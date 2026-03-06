const express = require('express');
const router = express.Router();
const Bike = require('../Models/Vehicle');
const store = require('../Store/store')
router.post('/book', async (req, res) => {
    try {
        const book = await Bike.insertMany(store);
        if (book) {
            res.status(200).json({
                success: true,
                message: "Data is Inserted Succesfully",
                users: book
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,

        })
    }
})
router.get('/book', async (req, res) => {
    try {

        const { cityname } = req.query;
     
        const bikes = await Bike.find({
            city: { $in: cityname }
        })
        res.status(200).json({
            success: true,
            message: "Data Fetch is Comp[lete",
            user: bikes
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,

        })
    }
})

module.exports = router