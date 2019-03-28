const express=require('express');
const router=express.Router();
const model=require('../models');
router.post('/add',(req,res)=>{
   model.Skill.create({
    Userid:req.body.id,
    Skill:req.body.skill
   }).then(()=>{
     res.status(200).json({
       message:'Skill added'
     });
   }).catch(err=>{
     res.status(501).json({
       error:err
     });
   });
});
router.get('/',(req,res)=>{
  const User=model.User;
  const Subcategory=model.Subcategory;
  model.Skill.findAll({
  }).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
    res.status(500).json({
      error:err
    });
  });
});
module.exports=router;
