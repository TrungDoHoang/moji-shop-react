import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavMobile.css'
import $ from 'jquery'
import CategoryItem from '../../../../features/products/components/Category/CategoryItem'
import { useSelector } from 'react-redux'
import { bookCategorySelector, toolCategorySelector } from '../../../../app/reducers/categorySlice'
import NavMobileItem from './NavMobileItem'



export default function NavMobile() {
    const toggleNavMobile = useRef(() => {
        $('.nav-mobile-items').click(function () {
            $('#toggle').click()
        })
    })

    const bookCategory = useSelector(bookCategorySelector)
    const toolCategory = useSelector(toolCategorySelector)

    return (
        <>
            <input type="checkbox" name="toggle" id="toggle" hidden />
            <label className="toggle-btn d-flex d-lg-none col-2 justify-content-center align-items-center" htmlFor="toggle"><span className="material-icons-outlined">
                segment
            </span></label>
            {/* Nav-mobile */}
            <label htmlFor="toggle" className="overlay d-none" />
            <nav className="nav-mobile" ref={toggleNavMobile.current}>
                <label htmlFor="toggle" className="float-end d-inline-block p-3">
                    <span className="material-icons-outlined">
                        close
                    </span>
                </label>
                <div className="nav-mobile-items">
                    <NavLink to="/shop" className="header-top__link text-decoration-none">TẤT CẢ</NavLink>
                </div>
                <h4 className="mt-2">Sách vở</h4> <hr />
                <div className="card-category">
                    {bookCategory.map(book => <NavMobileItem key={book.id}
                        LinkTo={`/shop/product?category=${book.id}`} Name={book.name} />)}
                </div>
                <h4 className="mt-2">Dụng cụ học tập</h4> <hr />
                <div className="card-category">
                    {toolCategory.map(tool => <NavMobileItem key={tool.id}
                        LinkTo={`/shop/product?category=${tool.id}`} Name={tool.name} />)}
                </div>
                <h4 className="mt-2">Liên hệ</h4> <hr />
                <div className="nav-mobile-items">
                    <Link to="/contact" className="header-top__link text-decoration-none">Hệ thống cửa hàng</Link>
                </div>
            </nav>

        </>
    )
}
