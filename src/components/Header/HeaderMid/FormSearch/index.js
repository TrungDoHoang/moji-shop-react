import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './FormSearch.css'

function FormSearch() {
    return (
        <div className="header-search">
                <form className="search-form">
                  <input type="text" className="form-control search-form-input" placeholder="Tìm kiếm sản phẩm" />
                  <div className="btn btn-search d-flex align-items-center"><span className="material-icons-outlined">
                      search
                    </span></div>
                </form>
                <span className="quick-search mt-2">
                  <Link className="header__link text-decoration-none" to="/">Ốp điện thoại</Link>
                  <Link className="header__link text-decoration-none" to="/">Quạt nhựa</Link>
                  <Link className="header__link text-decoration-none" to="/">Sticker</Link>
                  <Link className="header__link text-decoration-none" to="/">BT21</Link>
                </span>
              </div>
    )
}

export default FormSearch
