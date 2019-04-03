const express=require('express');
const router=express.Router();
const model=require('../models');
router.post('/send',(req,res)=>{
  const recieverId=req.body.reciever;
  const senderId=req.body.sender;
  const Text=req.body.message;
  model.Message.create({
    Text:Text,
    recieverId:recieverId,
    senderId:senderId
  }).then(result=>{
    res.status(200).json({
      message:'Message sent'
    });
  }).catch(err=>{
    res.status(401).json({
      message:'Error occured',
      error:err
    });
  });
});
module.exports=router;
