const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Clothing extends Model {}

Clothing.init(
  {
    clothingName: {
        type: DataTypes.STRING
    },
    // move to user model (have 3 Foriegn keys pointing to clothing, crafting, furniture items (many-many relationship)
    isAcquired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    price: {
        type: DataTypes.INTEGER
    },
    obtainedBy: {
        type: DataTypes.STRING,
    }
  },
  {
    sequelize
  }
);

module.exports = Clothing;