'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    bio: DataTypes.TEXT,
    status: DataTypes.STRING,
    last_active: DataTypes.DATE,
    dob: DataTypes.DATE,
    role: DataTypes.STRING,
    created_by: DataTypes.BIGINT,
    updated_by: DataTypes.BIGINT,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW 
    },
    updated_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW 
    }
  }, {
    sequelize,
    timestamps: false,
    modelName: 'users',
  });
  return users;
};