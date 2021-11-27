import React, { useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import NavMobile from './NavMobile'
import Logo from './Logo'
import FormSearch from './FormSearch'
import Cart from '../../Cart'
import './HeaderMid.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, userSelector, logOutAccount } from '../../../app/reducers/userSlice'
import { isEmptyObject } from 'jquery'

function HeaderMid() {
    const user = useSelector(userSelector)
    const dispatch = useDispatch()
    const location = useHistory()
    useEffect(()=> {
        dispatch(getUser())
    },[location.location])
    const logOut = e => {
        e.preventDefault();
        dispatch(logOutAccount())
        location.replace('/user/signin')
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
                        { !isEmptyObject(user) ? 
                        (<><NavLink to="/user/info" className="link__logon d-none d-lg-inline-block d-md-inline-block header__link text-decoration-none">
                            {user.TenKH ? user.TenKH : location.replace('/admin')}
                        </NavLink>
                        <NavLink to="/user/signin" onClick={logOut} className="link__logon d-none d-lg-inline-block d-md-inline-block header__link text-decoration-none">
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
