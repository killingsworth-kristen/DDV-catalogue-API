const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model {}

// bcrypt etc

User.init(
  {
    // isUnique
    username: {
      type: DataTypes.STRING,
      validate: {
        
      }
    },
    // isUnique
    email: {
        type: DataTypes.STRING,
        Validate: {

        }
    },
    password: {
        type: DataTypes.STRING,
        validate: {

        }
    },

  },
  {
    sequelize,
    // bcrypt etc.
  }
);

module.exports = User;