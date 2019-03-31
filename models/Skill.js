'use strict';
module.exports=(sequelize,Datatypes)=>{
   const Skill=sequelize.define('userskills',{
  id:{type:Datatypes.INTEGER,autoincrement:true,primaryKey:true},
  Userid:{type:Datatypes.INTEGER,allowNull:false},
  Skill:{type:Datatypes.INTEGER,allowNull:false}
});
Skill.associate=(model)=>{
   Skill.hasMany(model.User,{
     foreignKey:'Userid',
     as:'User'
   });
   Skill.hasMany(model.Subcategory,{
     foreignKey:'SkillId',
     as:'Skills'
   });
};
   return Skill;
};
