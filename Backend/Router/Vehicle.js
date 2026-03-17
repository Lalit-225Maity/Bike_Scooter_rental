const express=require('express');
const router=express.Router();
const {Createproduct,getProduct,filterVehicle}=require('../Controller/Vehicle');
router.post('/create',Createproduct);
router.get('/book',getProduct);
router.get('/filter',filterVehicle);
module.exports=router;