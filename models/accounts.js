'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class Account extends Model {
      static associate(models) {
         Account.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
         })
         Account.hasMany(models.Profile, {
            foreignKey: 'account_id',
            as: 'profiles',
         })
      }
   }
   Account.init(
      {
         userId: {
            field: 'user_id',
            type: DataTypes.INTEGER,
            references: {
               model: 'users',
               key: 'id',
            },
         },
         tier: DataTypes.STRING,
      },
      {
         sequelize,
         modelName: 'Account',
         tableName: 'accounts',
      }
   )
   return Account
}
