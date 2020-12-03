import React from 'react'
import {Link} from 'react-router-dom'

export default ({authenticated, current}) => {
    return authenticated && currentUser ? (
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><i className="material-icons" style={{"marginLeft": "10px"}}>live_tv</i>Netflux</Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/">Change Profile</Link></li>
                <li><Link to="/" onClick={() => localStorage.clear()}>Signout</Link></li>
            </ul>
            </div>
        </nav>
    ) : (
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><i className="material-icons" style={{"marginLeft": "10px"}}>live_tv</i>Netflux</Link>
            <ul className="right hide-on-med-and-down">
                <li><Link to="/register">SignUp</Link></li>
                <li><Link to="/login">SignIn</Link></li>
            </ul>
            </div>
        </nav>
    )
}