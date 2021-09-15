import React from 'react'
import { Link } from 'react-router-dom'
import MyCarousel from './MyCarousel'

function SlideGroup() {
    return (
        <div className="slide-group container-fluid">
        <div className="row gx-3">
          <div className="col-lg-9 col-12">
            <MyCarousel />
          </div>
          <div className="col-lg-3 d-none d-lg-block banner-right">
            <Link to="/shop">
              <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7534/bn/Youtube%20-%201_tuan_mua_do_cute.jpg" alt="" width="100%" />
            </Link>
            <Link to="/shop">
              <img src="https://storage.googleapis.com/cdn.nhanh.vn/store/7534/bn/sb_1622297902_958.jpg" alt="" width="100%" />
            </Link>
          </div>
        </div>
      </div>
    )
}

export default SlideGroup
