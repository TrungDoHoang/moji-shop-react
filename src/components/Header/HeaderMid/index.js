import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavMobile from './NavMobile'
import Logo from './Logo'
import FormSearch from './FormSearch'
import Cart from '../../Cart'
import './HeaderMid.css'
import { isEmptyObject } from 'jquery'

function HeaderMid() {
    
    const [user, setUser] = useState({
        // username: 'hoangtrung',
        // name: 'Trung Hoàng',
        // password: 'abc'
    })
    // useEffect(()=> {
    //     setUser(JSON.parse(localStorage.getItem('user')))
    // },[user])
    const logOut = e => {
        e.preventDefault();
        setUser({})
        localStorage.setItem('user', JSON.stringify({}))
    }
    return (
        <div className="header-content">
            <div className="container">
                <div className="row justify-content-around justify-content-md-between">
                    <NavMobile />

                    <Logo />

                    <div className="col-lg-6 d-lg-block d-none mt-5">
                        <FormSearch />
                    </div>

                    <div className="header-logon col-3 col-md-4 col-lg-3 mt-4">
                        {!isEmptyObject(user) ? 
                        (<><NavLink to="/" className="link__logon d-none d-lg-inline-block d-md-inline-block header__link text-decoration-none">
                            {user.name}
                        </NavLink>
                        <NavLink to="/" onClick={logOut} className="link__logon d-none d-lg-inline-block d-md-inline-block header__link text-decoration-none">
                            Thoát
                        </NavLink>
                        <NavLink to="/" className="icon-user-mobile d-flex align-items-center justify-content-center d-lg-none d-md-none header__link text-decoration-none">
                            <span className="material-icons-outlined">
                                person
                            </span>
                        </NavLink> </>) : 

                        (<><NavLink to="/user/signin" className="link__logon d-none d-lg-inline-block d-md-inline-block header__link text-decoration-none">Đăng
                            nhập</NavLink>
                        <NavLink to="/user/signup" className="link__logon d-none d-lg-inline-block d-md-inline-block header__link text-decoration-none">Đăng
                            ký</NavLink>
                        <NavLink to="/user/signin" className="icon-user-mobile d-flex align-items-center justify-content-center d-lg-none d-md-none header__link text-decoration-none">
                            <span className="material-icons-outlined">
                                person
                            </span>
                        </NavLink></>)
}
                        <Cart />
                    </div>
                    {/* Search mobile */}
                    <div className="col-12 d-lg-none">
                        <FormSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMid
