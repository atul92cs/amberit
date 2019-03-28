const {User}=require('../models');

module.exports={
  async post (req,res){
      try{
        const user= await User.create(req.body);
        res.send(user);
      }
      catch(err)
      {
        res.status(500).send({
          error:err
        });
      }
  }
};
