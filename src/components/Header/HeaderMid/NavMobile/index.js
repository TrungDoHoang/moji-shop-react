import React from 'react'
import './NavMobile.css'

export default function NavMobile() {
    return (
        <>
            <input type="checkbox" name="toggle" id="toggle" hidden />
            <label className="toggle-btn d-flex d-lg-none col-2 justify-content-center align-items-center" htmlFor="toggle"><span className="material-icons-outlined">
                segment
            </span></label>
            {/* Nav-mobile */}
            <label htmlFor="toggle" className="overlay d-none" />
            <nav className="nav-mobile">
                <label htmlFor="toggle" className="nav-mobile-items float-end d-inline-block p-3">
                    <span className="material-icons-outlined">
                        close
                    </span>
                </label>
                <div className="nav-mobile-items">
                    <a href="./shop.html" className="header-top__link text-decoration-none">TẤT CẢ</a>
                </div>
                <div className="nav-mobile-items">
                    <a href="./shop.html" className="header-top__link text-decoration-none">Sách vở</a>
                </div>
                <div className="nav-mobile-items">
                    <a href="./shop.html" className="header-top__link text-decoration-none">Dụng cụ học tập</a>
                </div>
                <div className="nav-mobile-items">
                    <a href="./contact.html" className="header-top__link text-decoration-none">Liên hệ</a>
                </div>
            </nav>

        </>
    )
}
