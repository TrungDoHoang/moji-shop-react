import React from 'react'
import {NavLink} from 'react-router-dom'
import './HeaderTop.css'

function HeaderTop() {
    return (
        <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-12 text-uppercase d-flex justify-content-around justify-content-lg-end">
              <NavLink to="/contact" className="header-top__link text-decoration-none">hệ thống cửa hàng</NavLink>
              <NavLink to="/#" className="header-top__link text-decoration-none">về Moji</NavLink>
              <NavLink to="/#" className="header-top__link text-decoration-none">tuyển dụng</NavLink>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HeaderTop
