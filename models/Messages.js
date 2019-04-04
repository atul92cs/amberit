'use strict';
module.exports=(sequelize,Datatypes)=>{
  const Message=sequelize.define('messages',{
    id:{type:Datatypes.INTEGER,autoincrement:true,primaryKey:true},
    Text:{type:Datatypes.STRING,allowNull:false},
    senderId:{type:Datatypes.INTEGER,allowNull:false},
    recieverId:{type:Datatypes.INTEGER,allowNull:false}
  });
  Message.associate=(model)=>{
    Message.belongsTo(model.User,{
      foreignKey:{

        field:'recieverId'
      }
    });
    Message.belongsTo(model.User,{
      foreignKey:{
        field:'senderId'
      }
    });
  };
  return Message;
};
