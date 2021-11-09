import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userSelector } from '../../../../app/reducers/userSlice'

function Sidenav() {
    const user = useSelector(userSelector)
    return (
        <div id="mySidenav" className="sidenav">
            <p className="logo"><span>M</span>ojiShop</p>
            <NavLink to="/admin/dashboard" title="DashBoard" activeClassName="active" className="icon-a d-flex align-items-center">
                <i className="fa fa-dashboard icons" />
                <span>
                    &nbsp;&nbsp;Dashboard
                </span>
            </NavLink>
            <NavLink to="/admin/products" title="Sản phẩm" activeClassName="active" className="icon-a d-flex align-items-center">
                <i className="fa fa-list icons" />
                <span>
                    &nbsp;&nbsp;Products
                </span>
            </NavLink>
            <NavLink to="/admin/customer" title="Khách hàng" activeClassName="active" className="icon-a d-flex align-items-center">
                <i className="fa fa-users icons" />
                <span>
                    &nbsp;&nbsp;Customers
                </span>
            </NavLink>
            <NavLink to="/admin/bill" title="Hóa đơn" activeClassName="active" className="icon-a d-flex align-items-center">
                <i className="fa fa-shopping-bag icons" />
                <span>
                    &nbsp;&nbsp;Orders
                </span>
            </NavLink>
            <NavLink to="/admin/news" title="Tin tức" activeClassName="active" className="icon-a d-flex align-items-center">
                <i className="fa fa-list-alt icons" />
                <span>
                    &nbsp;&nbsp;News
                </span>
            </NavLink>
            {
                user.MaQuyen && user.MaQuyen === '1' ?
                <NavLink to="/admin/manager" title="Quản lý nhân viên" activeClassName="active" className="icon-a d-flex align-items-center">
                    <i className="fa fa-users icons"></i>
                    <span>
                        &nbsp;&nbsp;Manager Staff
                    </span>
                </NavLink>
                :
                ''
            }
            <NavLink to="/admin/account" title="Thông tin tài khoản" activeClassName="active" className="icon-a d-flex align-items-center">
                <i className="fa fa-user-circle icons" />
                <span>
                    &nbsp;&nbsp;Accounts
                </span>
            </NavLink>
        </div>
    )
}

export default Sidenav
