'use strict'
module.exports = {
   up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('accounts', {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
         },
         userId: {
            field: 'user_id',
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
               model: 'users',
               key: 'id',
            },
            onDelete: 'cascade',
         },
         tier: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         createdAt: {
            field: 'created_at',
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: new Date(),
         },
         updatedAt: {
            field: 'updated_at',
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: new Date(),
         },
      })
   },
   down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('accounts')
   },
}
