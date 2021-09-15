import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
    const urlStatic = '/assets/images'
    return (
        <div className="col-lg-3 col-md-2 col-5 mt-4">
            <div className="navbar-brand mt-2 ms-lg-0 ms-md-0 ms-4">
                <Link to="/">
                    <img src={`${urlStatic}/Logo.png`} alt="Trang chủ" width={165} />
                </Link>
            </div>
        </div>
    )
}
