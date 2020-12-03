const { User, Account } = require ('../models')
const bcrypt = require('bcrypt')

require('dotenv').config()
const saltRounds = parseInt(process.env.SALT_ROUNDS)

const {
   checkPassword,
   generatePassword
 } = require('../middleware/passwordHandler')

 // req.body is { email: <email>, password: <password> }
const Login = async (req, resp, next) => {
   try {
      const email = req.body.email
      const password = req.body.password
      const user = await User.findOne( { where: { email: email }, include: {
         model: Account,
         as: 'account'
      }} )
      if ( user && (await checkPassword( password, user.password) ) ) {
         const payload = {
            name: user.name,
            id: user.id,
            accountID: user.account.id
          }
          resp.locals.payload = payload
          return next()
      }
      return resp.status(401).send({ msg: 'Unauthorized' })
    } catch (err) {
      throw err
    }
}

// body { name: , email: , password:, tier: }
const CreateUser = async (req, resp, next) => {
   try {
      const password_digest = await generatePassword (req.body.password)
      const userBody = { name: req.body.name, email: req.body.email, password: password_digest }
      const user = await User.create( userBody )
      // create the account record as well.
      const account = await Account.create( { user_id: user.id, tier: req.body.tier } )
      const payload = {
         id: user.id,
         accountId: account.id
       }
       resp.locals.payload = payload

      return next()
   }
   catch (err) {
      throw err
   }
}

module.exports = {
   Login,
   CreateUser
}
