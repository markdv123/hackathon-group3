import React from 'react'
import {Link} from 'react-router-dom'

export default ({authenticated, current}) => {
    return authenticated && currentUser ? (
        <nav>
            <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><i className="material-icons" style={{"marginLeft": "10px"}}>video</i>Netflux</Link>
            </div>
        </nav>
    ) : (
        <nav>

        </nav>
    )
}