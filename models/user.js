const Sequelize = require('sequelize');

const db = require('../util/database');

const User = db.define('user',{
    id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phoneNo:{
        type:Sequelize.INTEGER,
        allowNull:false 
    },
    email:{
        type:Sequelize.TEXT,
        allowNull:false
    }
});

module.exports =User;