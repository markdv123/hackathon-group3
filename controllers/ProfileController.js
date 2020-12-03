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

const GetProfileById = async ( req, resp )=> {
   try {
      const profileId = parseInt(req.params.profile_id)
      const profile = await Profile.findByPk( profileId )
      resp.send(profile)
   }
   catch (err) {
      console.log ( "Error in GetProfileById", err)
      throw err
   }
}


module.exports = {
   GetProfilesbyAccount,
   GetProfileById
}
