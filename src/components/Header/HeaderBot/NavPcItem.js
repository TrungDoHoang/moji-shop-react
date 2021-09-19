import React from 'react'
import { Link } from 'react-router-dom'

export default function NavPcItem({LinkTo, Name}) {
    return (
        <li className="category-item">
            <Link to={LinkTo} className="header-top__link text-decoration-none">{Name}</Link>
        </li>
    )
}
