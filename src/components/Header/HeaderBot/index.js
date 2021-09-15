import React from 'react'
import { Link } from 'react-router-dom'

function HeaderBot() {
    return (
        <div className="header-bot d-none d-lg-block ">
        <div className="container">
          <div className="row">
            <div className="col text-start">
              <Link to="/shop" className="header-top__link text-decoration-none">TẤT CẢ</Link>
              <div className="nav-pc-item d-inline-block position-relative">
                <Link to="/shop" className="header-top__link text-decoration-none">Sách vở</Link>
                <ul className="category list-unstyled position-absolute top-100">
                  <li className="category-item">
                    <Link to="/shop" className="header-top__link text-decoration-none">Sách giáo khoa</Link>
                  </li>
                  <li className="category-item">
                    <Link to="/shop" className="header-top__link text-decoration-none">Sách khoa học</Link>
                  </li>
                  <li className="category-item">
                    <Link to="/shop" className="header-top__link text-decoration-none">Truyện ngôn tình</Link>
                  </li>
                </ul>
              </div>
              <div className="nav-pc-item d-inline-block position-relative">
                <Link to="/shop" className="header-top__link text-decoration-none">Dụng cụ học tập</Link>
                <ul className="category list-unstyled position-absolute top-100">
                  <li className="category-item">
                    <Link to="/shop" className="header-top__link text-decoration-none">Bút ngộ nghĩnh</Link>
                  </li>
                  <li className="category-item">
                    <Link to="/shop" className="header-top__link text-decoration-none">Balo thời trang</Link>
                  </li>
                  <li className="category-item">
                    <Link to="/shop" className="header-top__link text-decoration-none">Thước kẻ</Link>
                  </li>
                  <li className="category-item">
                    <Link to="/shop" className="header-top__link text-decoration-none">Đựng bút đa năng</Link>
                  </li>
                  <li className="category-item">
                    <Link to="/shop" className="header-top__link text-decoration-none">Dụng cụ học tập khác</Link>
                  </li>
                </ul>
              </div>
              <Link to="/contact" className="header-top__link text-decoration-none">Liên hệ</Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HeaderBot
