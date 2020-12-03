import React, {useState} from 'react'

function ViewProfile() {
    const [profile, setProfile] = useState({})
    
    getProfile = async () => {
        const profile = await __GetProfileById(params.profile_id)
        setProfile(profile)
    }

    return (
    <div>
        <img src={profile.avatar}/>
        <h1 >Welcome! {profile.name} This Is Your Profile</h1>
    </div>
    )
}
export default ViewProfile