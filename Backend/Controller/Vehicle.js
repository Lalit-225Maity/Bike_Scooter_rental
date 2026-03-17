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
const filterVehicle = async (req, res) => {
    try {
        const { model } = req.query;
        const models = Array.isArray(model) ? model : [model];
        console.log(models);
        
        const Filters = await Vehiclemodel.find({
            name: { $in: models }
        })
    
        res.status(200).json({
            message: "All are done",
            Filters: Filters
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
module.exports = { Createproduct, getProduct, filterVehicle };