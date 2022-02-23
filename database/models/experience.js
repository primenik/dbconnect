'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class experience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  experience.init({
    topic: DataTypes.STRING,
    description: DataTypes.TEXT,
    group_id: DataTypes.STRING,
    sorting_template_id: DataTypes.STRING,
    small_group_prompt: DataTypes.TEXT,
    status: DataTypes.STRING,
    master_room_link: DataTypes.STRING,
    post_survey_question: DataTypes.STRING,
    breakout_room_user_limit: DataTypes.BIGINT,
    breakout_room_duration: DataTypes.BIGINT,
    intro_video: DataTypes.STRING,
    slug: DataTypes.STRING,
    start_at: DataTypes.DATE,
    expiry_at: DataTypes.DATE,
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
    modelName: 'experience',
  });
  return experience;
};