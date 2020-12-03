const Router = require('express').Router()

const controller = require('../controllers/UserController')

Router.get('/:user_id', controller.GetUser)

module.exports = Router
