const { User, Account } = require ('../models')

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
