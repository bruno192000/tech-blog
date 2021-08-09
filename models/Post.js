const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Post extends Model {}

Post.init(
    {
      
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },


      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },


      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },


      user_id: {
        
        references: {
                      model: 'user',
                      key: 'id'
                      },
        type: DataTypes.INTEGER,
      }
    },


    {
      modelName: 'post',
      freezeTableName: true,
      underscored: true,
      sequelize,
      
    }
  );
  
  module.exports = Post;