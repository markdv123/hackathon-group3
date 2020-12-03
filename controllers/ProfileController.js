const { Profile } = require ('../models')

const GetProfilesbyAccount = async ( req, resp ) => {
   try {
      const accountId = parseInt(req.params.account_id)
      const profiles = await Profile.findAll( { where: { account_id: accountId } } )
      resp.send(profiles)
   }
   catch (err) {
      console.log ( "Error in GetProfilesbyAccount", err)
      throw err
   }
}

module.exports = {
   GetProfilesbyAccount
}
