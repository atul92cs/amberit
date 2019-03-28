const express=require('express');
const router=express.Router();
const model=require('../models');
router.post('/create',(req,res)=>{
   model.Ads.create({}).then().catch(err=>{});
});

module.exports=router;
