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
          message:'User registered'
        });
     }).catch(err=>{
       res.status(501).json({
         error:err,
         message:"Error occured"
       });
     });
   });
});
router.post('/login',(req,res)=>{
  const Email=req.body.email;
  let fetchedUser;
  model.User.findOne({where:{Email}}).then(user=>{
    if(!user)
    {
      res.status(402).json({
        message:"User not found"
      });
    }
    fetchedUser=user;
    return bcrypt.compare(req.body.password,user.Password);
  }).then(result=>{
    if(!result)
    {
      res.status(403).json({
        message:"Error occured"
      });
    }
    const token=jwt.sign({email:fetchedUser.Email},"Jackward",{expiresIn:"72h"});
    res.status(201).json({
      token:token,
      expiresIn:72000,
      email:fetchedUser.Email,
      name:fetchedUser.Name,
      status:fetchedUser.Status
    });
  }).catch(err=>{
       res.status(406).json({
         message:"Server error"
       });
  });
});
module.exports=router;
