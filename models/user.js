const Sequelize=require('sequelize');

const sequelize=require('../utils/database');

const user=sequelize.define('user',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
      },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    age:Sequelize.INTEGER,
    mailid:{
        type:Sequelize.STRING
    }
});

module.exports=user;