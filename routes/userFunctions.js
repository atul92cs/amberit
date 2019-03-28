const model=require('../models');
const express=require('express');
const router =express.Router();
router.post('/register',(req,res)=>{
  model.User.create({
    Email:req.body.email,
    Name:req.body.name,
    Password:req.body.password,
    Status:false
  }).then(result=>{
    res.status(200).json({
      message:'User created'
    });
  }).catch(err=>{
    res.status(500).json({
      error:err
    });
  });
});
module.exports=router;
