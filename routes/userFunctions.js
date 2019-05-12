const model=require('../models');
const express=require('express');
const jwt =require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const multer=require('multer');
const cloudinary=require('cloudinary');
const router =express.Router();
const storage=multer.diskStorage({
  fielname:(req,file,callback)=>{
    callback(null,Date.now()+file.originalname);
  }
});
const upload=multer({storage:storage});
cloudinary.config({
  cloud_name:'dkhk4gyey',
  api_key:'459656749761335',
  api_secret:'AS_y6ZzH7FAjeoIxF1IjtMFKzQg'
});
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
      status:fetchedUser.Status,
      id:fetchedUser.id
    });
  }).catch(err=>{
       res.status(406).json({
         message:"Server error"
       });
  });
});
router.put('/:id',(req,res)=>{
  const id=req.params.id;
  const Name=req.body.name;
  const Phone=req.body.phone;
  const Location=req.body.location;
  model.User.update({Name:Name,Phone:Phone,Location:Location},{where:{id}}).then(result=>{
    res.stats(200).json({
      message:'User updated'
    });
  })
  .catch(err=>{
    res.status(402).json({
      message:'Error occured',
      error:err
    });
  });
});
router.put('/update/:id',upload.single('picture'),async(req,res)=>{
  const pic=await cloudinary.v2.uploader.upload(req.body.picture);
  const id =req.params.id;
  const Name=req.body.name;
  const Email=req.body.email;
  const Phone=req.body.phone;
  const Location=req.body.location;
  const Picture=pic.url;
  model.User.update({Name:Name,Email:Email,Phone:Phone,Location:Location,Picture:Picture,Status:"true"},{where:{id}}).then(result=>{
    res.status(200).json({
      message:'User updated'
    });
  }).catch(err=>{
    res.status(401).json({
      message:'Error occured',
      error:err
    });
  });
});
router.get('/:id',(req,res)=>{
  const id=req.params.id;
  model.User.findOne({where:{id:id}}).then(user=>{
    res.status(200).json({
      user
    });
  }).catch(err=>{
      res.status(401).json({
        message:'Error occured',
        error:err
      });
  });
});
module.exports=router;
