import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidenav() {
    return (
        <div id="mySidenav" className="sidenav">
            <p className="logo"><span>M</span>ojiShop</p>
            <NavLink to="/admin/dashboard" title="DashBoard" activeClassName="active" className="icon-a"><i className="fa fa-dashboard icons" /> &nbsp;&nbsp;Dashboard</NavLink>
            <NavLink to="/admin/products" title="Sản phẩm" activeClassName="active" className="icon-a"><i className="fa fa-list icons" /> &nbsp;&nbsp;Products</NavLink>
            <NavLink to="/admin/customer" title="Khách hàng" activeClassName="active" className="icon-a"><i className="fa fa-users icons" /> &nbsp;&nbsp;Customers</NavLink>
            <NavLink to="/admin/abc" activeClassName="active" className="icon-a"><i className="fa fa-shopping-bag icons" /> &nbsp;&nbsp;Orders</NavLink>
            <NavLink to="/admin/abc" activeClassName="active" className="icon-a"><i className="fa fa-tasks icons" /> &nbsp;&nbsp;Inventory</NavLink>
            <NavLink to="/admin/abc" activeClassName="active" className="icon-a"><i className="fa fa-user icons" /> &nbsp;&nbsp;Accounts</NavLink>
            <NavLink to="/admin/abc" activeClassName="active" className="icon-a"><i className="fa fa-list-alt icons" /> &nbsp;&nbsp;News</NavLink>
        </div>
    )
}

export default Sidenav
