const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Crafting extends Model {}

Crafting.init(
  {
    craftingName: {
      type: DataTypes.STRING
    },
    isAcquired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    obtainedBy: {
        type: DataTypes.STRING,
    },
    craftingIngredients: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },
  {
    sequelize
  }
);

module.exports = Crafting;