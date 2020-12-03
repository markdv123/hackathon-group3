const Router = require('express').Router()

const controller = require('../controllers/ProfileController')

Router.get('/:account_id', controller.GetProfilesbyAccount)
Router.get('/view/:profile_id', controller.GetProfileById)
Router.post('/create/:account_id', controller.CreateProfile)

module.exports = Router
