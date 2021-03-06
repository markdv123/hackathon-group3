'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class User extends Model {
      static associate(models) {
         User.hasOne(models.Account, {
            foreignKey: 'user_id',
            as: 'account',
         })
      }
   }
   User.init(
      {
         name: DataTypes.STRING,
         email: DataTypes.STRING,
         password: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'User',
         tableName: 'users',
      }
   )
   return User
}
