'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class Account extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         Account.belongsTo(models.Team, {
            foreignKey: 'user_id',
            as: 'user',
         })
         Account.hasMany (models.Profile, {
            foreignKey:  'account_id',
            as: "profiles"
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
         tableName: 'accounts'
      }
   )
   return Account
}
