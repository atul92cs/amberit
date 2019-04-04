const express=require('express');
const router=express.Router();
const model=require('../models');
const Op=model.sequelize.Op;
router.post('/send',(req,res)=>{
  const recieverId=req.body.reciever;
  const senderId=req.body.sender;
  const Text=req.body.message;
  const Adid=req.body.ad;
  model.Message.create({
    Text:Text,
    recieverId:recieverId,
    senderId:senderId,
    Adid:Adid
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
router.get('/:sid/:rid',(req,res)=>{
   const senderId=req.params.sid;
   const recieverId=req.params.rid;
  model.Message.findAll({
    where:{
      recieverId:recieverId,
      senderId:senderId
    }
  }).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
    res.status(401).json({
      err
    });
  });
});
module.exports=router;
