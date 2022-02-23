'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class experience_participants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  experience_participants.init({
    experience_id: DataTypes.BIGINT,
    user_id: DataTypes.BIGINT,
    participant_name: DataTypes.STRING,
    participant_email: DataTypes.STRING,
    breakout_room_id: DataTypes.STRING,
    steps: DataTypes.BIGINT,
    name_tag: DataTypes.STRING,
    is_guest: DataTypes.BOOLEAN,
    post_survey_response: DataTypes.TEXT,
    npr_score: DataTypes.BIGINT,
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
    timestamps:false,
    modelName: 'experience_participants',
  });
  return experience_participants;
};