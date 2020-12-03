'use strict'

module.exports = {
   up: async (queryInterface, Sequelize) => {
      return queryInterface.addConstraint('users', {
         fields: ['email'],
         type: 'unique',
         name: 'users_email_unique_constraint',
      })
   },

   down: async (queryInterface, Sequelize) => {
      return queryInterface.removeConstraint(
         'users',
         'users_email_unique_constraint'
      )
   },
}
