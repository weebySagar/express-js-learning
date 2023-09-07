const sequelize = require('sequelize');
const db = require('../util/database');


const Proudct = db.define('product',{
  id:{
    type:sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  title:{
    type:sequelize.STRING,
    allowNull:false
  },
  price:{
    type: sequelize.DOUBLE,
    allowNull:false
  },
  description:{
    type:sequelize.STRING,
    allowNull:false
  },
  imageUrl:{
    type  :sequelize.STRING,
    allowNull:false
  }
});

module.exports = Proudct;