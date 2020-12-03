import React, {useEffect, useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Nav from '../components/Nav'
import { __GetProfiles } from '../services/ProfileServices'

function Home(props) {
    const [profiles, updateProfiles] = useState([])

    const getProfiles = async () => {
        const profiles = await __GetProfiles(props.currentUser.account_id)
        updateProfiles(profiles)
    }

    useEffect(()=> {
        getProfiles()
    }, [])

    return (
        <div>
            <Nav />
            {props.authenticated && props.currentUser ? (
                <div>
                    {profiles.map((profile)=> {
                        return (
                            <div>
                                <Link to={`/profile/${profile.id}`}><img src={profile.avatar}/></Link>
                                <p>{profile.name}</p>
                            </div>
                        )
                    })}
                    <a class="waves-effect waves-light btn-large" href="/createprofile"><i class="material-icons left">person_add</i>Add Profile</a>
                </div>
            ) : (
                <div>
                    <h2>Welcome to Netflux</h2>
                    <p>The world's most popular streaming service for everyone's favorite movies and TV shows. Click Cet Started to register a new account.</p>
                    <a class="waves-effect waves-light btn-large"><i class="material-icons left">person_add</i>Get Started</a>
                    <a class="waves-effect waves-light btn-large"><i class="material-icons left">person</i>Sign In</a>
                </div>
            )}
        </div>
    )
}

export default withRouter(Home)