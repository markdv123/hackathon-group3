const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const ProfileRouter = require('./ProfileRouter')

Router.use('/users', UserRouter)
Router.use('/profiles', ProfileRouter)

module.exports = Router
