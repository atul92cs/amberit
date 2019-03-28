'use strict';
module.exports=(sequelize,Datatypes)=>{
  const Category=sequelize.define('categories',{
    id:{type:Datatypes.INTEGER,autoincrement:true,primaryKey:true},
    Name:{type:Datatypes.STRING,allowNull:false},
  });
  return Category;
};
