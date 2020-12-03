import ApiClient from './ApiClient'

export const __GetProfiles = async ( accountId) => {
   try {
      const res = await ApiClient.get(`/profiles/{accountId}` )
      return res.data
   } catch (err) {
      throw err
   }
}

export const __GetProfileById = async ( profileId ) => {
   try {
      const res = await ApiClient.get(`/profiles/view/{profileId}`)
      return res.data
   }
   catch (err ) {
      throw err
   }
}

export const __CreateProfile = ( accountId, name, avatar, child ) => {
   try {
      const res = await ApiClient.post('/profiles/create', { accountId, name, })
   }
   catch (err) {
      throw err
   }
}


