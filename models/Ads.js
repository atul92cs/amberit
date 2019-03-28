'user strict';
module.exports=(sequelize,Datatypes)=>{
const Ads=sequelize.define('ads',{
  id:{type:Datatypes.INTEGER,autoincrement:true,primaryKey:true},
  Date:{type:Datatypes.STRING,allowNull:false},
  Title:{type:Datatypes.STRING,allowNull:false},
  Content:{type:Datatypes.STRING,allowNull:false},
  Picture:{type:Datatypes.STRING,allowNull:false},
  Category:{type:Datatypes.STRING,allowNull:false},
  Subcategory:{type:Datatypes.STRING,allowNull:false},
  Userid:{type:Datatypes.INTEGER,allowNull:false},
  Status:{type:Datatypes.STRING,allowNull:false}
});
Ads.associate=(models)=>{
  Ads.belongsTo(models.User,{
    onDelete:"CASCADE",
    foreignKey: 'usersid'
  });
};
   return Ads;
};
