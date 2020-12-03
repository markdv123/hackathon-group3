const Router = require('express').Router()

const controller = require('../controllers/ProfileController')

Router.get('/:account_id', controller.GetProfilesbyAccount)

module.exports = Router
