const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Set extends Model {}

Set.init(
  {
    setName: {
        types: DataTypes.STRING
    }
  },
  {
    sequelize
  }
);

module.exports = Set;