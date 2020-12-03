import React, {useEffect, useState} from 'react'
import __GetProfileById from '../services/ProfileServices'

function ViewProfile() {
    const [profile, setProfile] = useState({})
    
    const getProfile = async () => {
        const profile = await __GetProfileById(params.profile_id)
        setProfile(profile)
    }

    useEffect(()=> {
        getProfile()
    }, [])

    return (
    <div>
        <img src={profile.avatar}/>
        <h1 >Welcome! {profile.name} This Is Your Profile</h1>
    </div>
    )
}
export default ViewProfile