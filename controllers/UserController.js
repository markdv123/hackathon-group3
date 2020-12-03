const { User, Account } = require ('../models')
const bcrypt = require('bcrypt')

require('dotenv').config()
const saltRounds = parseInt(process.env.SALT_ROUNDS)

const {
   checkPassword,
   generatePassword
 } = require('../middleware/passwordHandler')

 // body is { email: <email>, password: <password> }

const Login = async (req, resp) => {
   try {
      const email = req.body.email
      const password = req.body.password
      const user = await User.findOne( { where: { email: email } } )
      if ( user && (await checkPassword( password, user.password) ) ) 
        resp.send ( user )
      else
         resp.status(401).send({ msg: 'Unauthorized' })
    } catch (err) {
      throw err
    }
}





const GetUser = async ( req, resp ) => {
   try {
      const user = await User.findByPk(req.params.user_id, {
         include: {
            model: Account,
            as: 'account'
         }
      })
      resp.send(user)
   }
   catch (err) {
      console.log ( "Error in GetUser", err)
      throw err
   }
}


module.exports = {
   GetUser
}
