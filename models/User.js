

const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}


User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    
    
    username: {
        unique: true,
        allowNull:false,
        type: DataTypes.STRING,
    },


    password: {
        allowNull: false,
        validate: { len: [4]} ,
        type: DataTypes.STRING,         
    }
  },


  {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData; 
        },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },

    
    modelName: 'user',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    sequelize,
  }
);

module.exports = User;