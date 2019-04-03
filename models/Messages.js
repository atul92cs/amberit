'use strict';
module.exports=(sequelize,Datatypes)=>{
  const Message=sequelize.define('messages',{
    id:{type:Datatypes.INTEGER,autoincrement:true,primaryKey:true},
    Text:{type:Datatypes.STRING,allowNull:false},
    senderId:{type:Datatypes.INTEGER,allowNull:false},
    recieverId:{type:Datatypes.INTEGER,allowNull:false},
    Adid:{type:Datatypes.INTEGER,allowNull:false}
  });
  Message.associate=(model)=>{
    Message.belongsTo(model.User,{
      foreignKey:{
        name:'Reciever',
        field:'recieverId'
      }
    });
    Message.belongsTo(model.User,{
      foreignKey:{
        name:'Sender',
        field:'senderId'
      }
    });
  };
  return Message;
};
