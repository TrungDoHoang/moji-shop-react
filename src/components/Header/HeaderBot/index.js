import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { bookCategorySelector, toolCategorySelector } from '../../../app/reducers/categorySlice'
import NavPcItem from './NavPcItem'

function HeaderBot() {
  const bookCategory = useSelector(bookCategorySelector)
  const toolCategory = useSelector(toolCategorySelector)
  return (
    <div className="header-bot d-none d-lg-block ">
      <div className="container">
        <div className="row">
          <div className="col text-start">
            <Link to="/shop" className="header-top__link text-decoration-none">TẤT CẢ</Link>
            <div className="nav-pc-item d-inline-block position-relative">
              <div className="header-top__link text-decoration-none">Sách vở</div>
              <ul className="category list-unstyled position-absolute top-100">
                {bookCategory.map(book => <NavPcItem key={book.id}
                  LinkTo={`/shop/product?category=${book.id}`} Name={book.name} />)}
              </ul>
            </div>
            <div className="nav-pc-item d-inline-block position-relative">
              <div className="header-top__link text-decoration-none">Dụng cụ học tập</div>
              <ul className="category list-unstyled position-absolute top-100">
                {toolCategory.map(tool => <NavPcItem key={tool.id}
                  LinkTo={`/shop/product?category=${tool.id}`} Name={tool.name} />)}
              </ul>
            </div>
            <div className="nav-pc-item d-inline-block position-relative">
              <div className="header-top__link text-decoration-none">Liên hệ</div>
              <ul className="category list-unstyled position-absolute top-100">
                <NavPcItem LinkTo="/contact" Name="Hệ thống cửa hàng" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HeaderBot
