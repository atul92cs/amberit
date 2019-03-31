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
router.get('/:id',(req,res)=>{
     const id=req.params.id;
    model.sequelize.query('select userskills.id,subcategories.Name from userskills join subcategories on userskills.Skill=subcategories.id where Userid=?',{replacements:[id], type: model.sequelize.QueryTypes.SELECT }).then(result=>
    res.status(200).json({
      result
    })).catch(err=>{
      res.status(401).json({err});
    });
});
router.put('/:id',(req,res)=>{
  const id=req.params.id;
  const Userid=req.body.user;
  const Skill=req.body.skill;
  model.Skill.update({Userid:Userid,Skill:Skill},{where:{id}}).then(result=>{res.status(200).json({
    message:'Skill updated'
  })}).catch(err=>{
    res.status(401).json({
      message:'error occured',
      error:err
    })
  });
});
router.delete('/:id',(req,res)=>{
  const id=req.params.id;
  model.Skill.destroy({where:{id:id}}).then(result=>{
    if(result==1)
    {
      res.status(200).json({
        message:'Skill deleted'
      });
    }
    else {
      res.status(404).json({
        message:'Skill not found'
      });  
    }

  }).catch(err=>{
    res.status(401).json({
      message:'Error occured',
      error:err
    });
  });
});
module.exports=router;
