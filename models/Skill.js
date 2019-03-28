'use strict';
module.exports=(sequelize,Datatypes)=>{
   const Skill=sequelize.define('userskills',{
  id:{type:Datatypes.INTEGER,autoincrement:true,primaryKey:true},
  Userid:{type:Datatypes.INTEGER,allowNull:false},
  Skill:{type:Datatypes.INTEGER,allowNull:false}
});
   Skill.associate=(model)=>{
     Skill.belongsToMany(model.User,{
       through:"userskills",
       targetKey:"Userid"
     });
    // Skill.belongsToMany(model.Subcategory,{
      // through:"userskills",
      // targetKey:"Skillid"
     //});
   };
   return Skill;
};
