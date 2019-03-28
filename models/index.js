
const Ad=require('./Ads');
const Skill=require('./Skill');
const User=require('./Users');
const Category=require('./Category');
const Subcategory=require('./Subcategory');
const Sequelize=require('sequelize');

const database=new Sequelize('ambelit','root','seed',{
  host:'localhost',
  port:'3306',
  dialect:'mysql'
});
const model={
  Ads:database.import('./Ads'),
  Skill:database.import('./Skill'),
  User:database.import('./Users'),
  Category:database.import('./Category'),
  Subcategory:database.import('./Subcategory')
};
Object.keys(model).forEach((modelName)=>{
  if('associate' in model[modelName]){
    model[modelName].associate(model);
  }
});
model.sequelize=database;
model.Sequelize=Sequelize;
module.exports= model;
