import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavMobile.css'
import $ from 'jquery'



export default function NavMobile() {
    useEffect(()=> {
        $('.nav-mobile-items').click(function() {
            $('#toggle').click()
        })
    })
    return (
        <>
            <input type="checkbox" name="toggle" id="toggle"  hidden/>
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
                    <NavLink to="/shop" className="header-top__link text-decoration-none">TẤT CẢ</NavLink>
                </div>
                <div className="nav-mobile-items">
                    <Link to="/shop/sach_vo" className="header-top__link text-decoration-none">Sách vở</Link>
                </div>
                <div className="nav-mobile-items">
                    <Link to="/shop/dung_cu" className="header-top__link text-decoration-none">Dụng cụ học tập</Link>
                </div>
                <div className="nav-mobile-items">
                    <Link to="/contact" className="header-top__link text-decoration-none">Liên hệ</Link>
                </div>
            </nav>

        </>
    )
}
