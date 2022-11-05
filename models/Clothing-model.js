const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Clothing extends Model {}

Clothing.init(
  {
    clothing_name: {
        type: DataTypes.STRING
    },
    isAcquired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    price: {
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize
  }
);

module.exports = Clothing;