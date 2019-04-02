const express=require('express');
const router=express.Router();
const model=require('../models');
router.post('/create',(req,res)=>{
  const Date=req.body.date;
  const Title=req.body.title;
  const Content=req.body.content;
  const Picture=req.body.picture;
  const Category=req.body.category;
  const Subcategory=req.body.subcategory;
  const Userid=req.body.id;

   model.Ads.create({
     Date:Date,
     Title:Title,
     Content:Content,
     Picture:Picture,
     Category:Category,
     Subcategory:Subcategory,
     Userid:Userid,
     Status:"false"
   }).then(result=>{
       res.status(200).json({
         message:'Ad created'
       });
   }).catch(err=>{
       res.status(401).json({
         message:'Error occured',
         error:err
       });
   });
});
router.get('/',(req,res)=>{
  model.Ads.findAll({

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
router.get('/ads',(req,res)=>{
  model.sequelize.query(' select ads.Userid ,ads.id,ads.Date,ads.Title,ads.Content,ads.Picture,categories.Name as Category,subcategories.Name as Subcategory,users.Name as Username from ads join subcategories on ads.Subcategory=subcategories.id join categories on ads.Category=categories.id join users on ads.Userid=users.id where ads.Status="true"',{type: model.sequelize.QueryTypes.SELECT}).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
    res.status(401).json({
      message:'Error occured',
      error:err
    });
  });
});
router.put('/:id',(req,res)=>{
  const id=req.params.id;
  const Title=req.body.title;
  const Content=req.body.content;
  const Picture=req.body.picture;
  const Category=req.body.category;
  const Subcategory=req.body.subcategory;
  model.Ads.update({Title:Title,Content:Content,Picture:Picture,Category:Category,Subcategory:Subcategory},{where:{id}}).then(result=>{
     res.status(200).json({
       message:'updated'
     });
  }).catch(err=>{
     res.status(401).json({
       message:'error occured',
       error:err
     });
  });
});
router.get('/ads/:id',(req,res)=>{
  const id=req.params.id;
  model.sequelize.query('select ads.Userid,ads.id,ads.Date,ads.Status,ads.Title,ads.Content,ads.Picture,categories.Name as Category,subcategories.Name as Subcategory,users.Name as Username from ads join subcategories on ads.Subcategory=subcategories.id join categories on ads.Category=categories.id join users on ads.Userid=users.id where Userid =?',{replacements:[id],type:model.sequelize.QueryTypes.SELECT}).then(result=>{
    res.status(200).json({
      result
    });
  }).catch(err=>{
     res.status(401).json({
       err
     });
  });
})
module.exports=router;
