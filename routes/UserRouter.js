const Router = require('express').Router()
const { createToken, verifyToken, getToken } = require('../middleware/jwtHandler')
const controller = require('../controllers/UserController')

// Router.get('/view/:user_id', controller.GetUser)
Router.get('/login', controller.Login, createToken)
Router.post('/create', controller.CreateUser, createToken)

module.exports = Router
