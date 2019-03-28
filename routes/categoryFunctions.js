const express=require('express');
const router=express.Router();
const model=require('../models');
router.post('/add',(req,res)=>{
  model.Category.create({
    Name:req.body.name
  }).then(()=>{
    res.status(200).json({
      message:'Category created'
    });
  }).catch(err=>{
    res.status(501).json({
      error:err
    });
  });
});
module.exports=router;
