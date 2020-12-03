import React, {useEffect, useState} from 'react'
import {__GetProfileById} from '../services/ProfileServices'
import Nav from '../components/Nav'

function ViewProfile(props) {
    const [profile, setProfile] = useState({})
    
    const getProfile = async () => {
        const profile = await __GetProfileById(props.match.params.profile_id)
        setProfile(profile)
    }

    useEffect(()=> {
        getProfile()
    }, [])

    return (
    <div>
        <Nav />
        <img src={profile.avatar}/>
        <h1 >Welcome! {profile.name} This Is Your Profile</h1>
    </div>
    )
}
export default ViewProfile