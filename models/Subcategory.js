'use strict';
module.exports=(sequelize,Datatypes)=>{
  const Subcategory=sequelize.define('subcategories',{
    id:{type:Datatypes.INTEGER,autoincrement:true,primaryKey:true},
    Name:{type:Datatypes.STRING,allowNull:false},
    Categoryid:{type:Datatypes.INTEGER,allowNull:false}
  });
  Subcategory.associate=(model)=>{
    Subcategory.belongsTo(model.Category,{
      foreignKey:'categoryid',
        onDelete:"CASCADE",
        onUpdate:"CASCADE"

    });
    Subcategory.belongsTo(model.Skill,{
      foreignKey:'SkillId'
    });
};
  return Subcategory;
};
