const model=require('../models');
const express=require('express');
const jwt =require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const router =express.Router();
router.post('/register',(req,res)=>{
   bcrypt.hash(req.body.password,10).then(hash=>{
     const Name=req.body.name;
     const Email=req.body.email;
     const Password=hash;
     const Status="false";
     model.User.create({
       Email,
       Name,
       Password,
       Status
     }).then(()=>{
        res.status(201).json({
          message:'User reegistered'
        });
     }).catch(err=>{
       res.status(501).json({
         error:err,
         message:"Error occured"
       });
     });
   });
});
module.exports=router;
