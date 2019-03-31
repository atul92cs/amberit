'use strict';
module.exports=(sequelize,Datatypes)=>{
const User=sequelize.define('users',{
  id:{type:Datatypes.INTEGER,autoincrement:true,primaryKey:true},
  Email:{type:Datatypes.STRING,allowNull:false},
  Name:{type:Datatypes.STRING,allowNull:false},
  Password:{type:Datatypes.STRING,allowNull:false},
  Phone:{type:Datatypes.STRING,allowNull:true},
  Status:{type:Datatypes.STRING,allowNull:true}
});
User.associate=(model)=>{
  User.belongsTo(model.Skill,{
    foreignKey:'Userid'
  });
};
return User;
};
