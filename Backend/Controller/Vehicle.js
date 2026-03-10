 const Vehiclemodel = require('../Models/Vehicle');
const API = require('../API/API');
const Createproduct = async (req, res) => {
    try {
        const Bike = await Vehiclemodel.insertMany(API);
        res.status(200).json({
            success: true,
            message: "Data is Inserted",
            Bike: Bike
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
const getProduct = async (req, res) => {
    try {
        const { cityname } = req.query;
        if (!cityname) {
            return res.status(401).json({
                message: "Data is not Found"
            })
        }
        const FetchBike = await Vehiclemodel.find({
            city: { $in: [cityname] }
        })
        res.status(200).json({
            success: true,
            message: "Data is Found",
            FetchBike: FetchBike
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = { Createproduct, getProduct };