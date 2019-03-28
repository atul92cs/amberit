const userControllers=require('./controllers/userControllers');
const express=require('express');
const router =express.Router();
router.post('/resgister',userControllers.post);
module.exports=router;
