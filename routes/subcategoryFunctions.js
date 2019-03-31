const express=require('express');
const router=express.Router();
const models=require('../models');

router.post('/add',(req,res)=>{
  models.Subcategory.create({
    Name:req.body.name,
    Categoryid:req.body.category
  }).then(()=>{
    res.status(200).json({
      message:'Subcategory created'
    });
  }).catch(err=>{
    res.status(500).json({
      error:err
    });
  });
});
router.get('/',(req,res)=>{
  models.Subcategory.findAll({
    include:[{all:true}]
  }).then(subcategories=>{
    res.status(200).json({
      subcategories
    });
  }).catch(err=>{
    res.status(501).json({
      error:err
    });
  });
});
module.exports=router;
