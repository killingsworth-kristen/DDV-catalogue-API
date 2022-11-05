const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Furniture extends Model {}

Furniture.init(
  {
    furnitureName: {
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
    craftingIngredients: {
        type: DataTypes.STRING,
        allowNull: true
    }
  },
  {
    sequelize
  }
);

module.exports = Furniture;