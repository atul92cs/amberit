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
router.get('/:id',(req,res)=>{
  const id=req.params.id;
  models.Subcategory.findAll({where:{Categoryid:id}}).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
       res.status(403).json({
         message:'Error occured',
         error:err
       });
  });
});
module.exports=router;
