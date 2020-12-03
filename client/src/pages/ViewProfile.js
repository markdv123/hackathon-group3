import React from 'react'

function ViewProfile() {
    const [profile, setProfile] = useState({})

    return (
    <div>
        <img src={profile.avatar}/>
        <h1 >Welcome! {profile.name} This Is Your Profile</h1>
    </div>
    )
}
export default ViewProfile