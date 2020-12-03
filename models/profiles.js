'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
   class Profile extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
         Profile.belongsTo(models.Account, {
            foreignKey: 'account_id',
            as: 'profile',
         })
      }
   }
   Profile.init(
      {
         accountId: {
            type: DataTypes.INTEGER,
            field: 'account_id',
            references: {
               model: 'accounts',
               key: 'id',
            },
         },
         name: DataTypes.STRING,
         avatar: DataTypes.STRING,
         child: DataTypes.BOOLEAN,
      },
      {
         sequelize,
         modelName: 'Profile',
         tableName: 'profiles'
      }
   )
   return Profile
}
