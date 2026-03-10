const express=require('express');
const router=express.Router();
const {Createproduct,getProduct}=require('../Controller/Vehicle');
router.post('/create',Createproduct);
router.get('/book',getProduct);
module.exports=router;