import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMobileItem({LinkTo, Name}) {
    return (
        <div className="nav-mobile-items">
            <Link to={LinkTo} className="header-top__link text-decoration-none">{Name}</Link>
        </div>
    )
}
