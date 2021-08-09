const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}
Comment.init({
    
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    
    
    comment_text: {
        validate: {len: [3]},
        type: DataTypes.STRING,
    },

    
    user_id: {
        references: {
                    key: 'id',
                    model: 'user',
                    },
        type: DataTypes.INTEGER,
        allowNull: false,
    },


    post_id: {
        references: {
            key: 'id',
            model: 'user',
            },
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }
},


{
    modelName: 'comment',
    freezeTableName: true,
    sequelize,
    underscored: true,
});


module.exports = Comment;