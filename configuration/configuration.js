'use strict';
const Sequelize=require('sequelize');
const sequelize=new Sequelize('amberlit','root','seed',{
  host:'localhost',
  port:'3306',
  dialect:'mysql'
});
module.exports=sequelize;
