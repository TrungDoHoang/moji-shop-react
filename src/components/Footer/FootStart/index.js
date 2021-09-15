import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function FootStart() {
    return (
        <div className="f-start">
          <div className="container">
            <div className="row gx-5">
              <div className="f-hotline col-xl-2 col-md-3 col-12">
                <div className="item d-inline-flex align-items-end full clearfix">
                  <div className="pull-left"><span className="f-icon material-icons-outlined">
                      phone_in_talk
                    </span></div>
                  <Link to="/" className="pull-left ">
                    <span className="text-18 d-inline-block pe-2 w-lg-100">
                      Hotline
                    </span>
                    <span className="big full clearfix text-23">0899.179.989</span>
                  </Link>
                </div>
                <div className="item d-inline-flex align-items-end full clearfix">
                  <div className="pull-left"><span className="f-icon material-icons-outlined">
                      email
                    </span></div>
                  <Link to="/" className="pull-left">
                    <span className="text-18 d-inline-block pe-2 w-lg-100">
                      Email
                    </span>
                    <span className="full clearfix text-23">cskh@moji.vn</span>
                  </Link>
                </div>
                <div className="item f-txt-l full clearfix">
                  <p><NavLink to="/" className="pull-left" href rel="noreferrer noopener">CHÍNH SÁCH BÁN
                      HÀNG</NavLink></p>
                  <p><NavLink to="/" className="pull-left" href rel="noreferrer noopener">HƯỚNG DẪN MUA
                      HÀNG</NavLink></p>
                  <p />
                </div>
              </div>
              <div className="f-room col-xl-3 col-md-3 col-12">
                <h3 className="f-title">HÀ NỘI</h3>
                <div className="f-room-text">
                  <ul>
                    <li>81 Bà Triệu, Hai Bà Trưng</li>
                    <li>241 Chùa Bộc, Đống Đa</li>
                    <li>60 Trần Đại Nghĩa, Hai Bà Trưng</li>
                    <li>226 Nguyễn Trãi, Nam Từ Liêm (gần ĐH Hà Nội)</li>
                    <li>157 Xuân Thủy, Cầu Giấy</li>
                    <li>7 ngõ 165 Thái Hà, Đống Đa</li>
                  </ul>
                </div>
              </div>
              <div className="f-room  col-xl-5 col-md-3 col-12">
                <h3 className="f-title">TP. HỒ CHÍ MINH</h3>
                <div className="f-room-text">
                  <ul>
                    <li>92 Hồ Tùng Mậu, P.Bến Nghé, Q1</li>
                    <li>459E Nguyễn Đình Chiểu, P.5, Q.3 (ngã tư Cao Thắng)</li>
                    <li>708 Sư Vạn Hạnh, P.12, Q.10 (đối diện chéo Vạn Hạnh Mall)</li>
                    <li>87 Bàu Cát, P.14, Q.Tân Bình (khúc giao Nguyễn Hồng Đào)</li>
                    <li>54A Hoa Lan, P.2, Q.Phú Nhuận (gần Pizza Hut Phan Xích Long)</li>
                  </ul>
                </div>
              </div>
              <div className="f-lo-social col-xl-2 col-md-3 col-12">
                <Link to="/" className="f-logo text-center">
                  <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded" src="./assets/images/logo-f.png" data-src="./assets/images/logo-f.png" alt="logo" sizes="107px" />
                </Link>
                <h3 className="f-title mt-3">Hãy kết nối với chúng mình</h3>
                <div className="social text-start ms-4">
                  <a target="_blank" rel="noreferrer noopener" className="text-decoration-none" href="https://www.instagram.com/mojivn">
                    <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded" src="./assets/images/social-color-insta.png" data-src="./assets/images/social-color-insta.png" alt="instagram" sizes="24px" />
                  </a>
                  <a target="_blank" rel="noreferrer noopener" className="text-decoration-none" href="https://www.facebook.com/mojivietnam">
                    <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded" src="./assets/images/fb-logo.png" data-src="./assets/images/fb-logo.png" alt="facebook" sizes="24px" />
                  </a>
                  <a target="_blank" rel="noreferrer noopener" className="text-decoration-none" href="https://www.youtube.com/channel/UCld80kfDOf0yUeKV7_hv6cw?ab_channel=MojiChannel">
                    <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded" src="./assets/images/social-color-youtube.png" data-src="./assets/images/social-color-youtube.png" alt="youtube" sizes="34px" />
                  </a>
                </div>
                <a className="logo-bct" href="http://online.gov.vn/Home/WebDetails/34491?AspxAutoDetectCookieSupport=1" target="_blank" rel="noreferrer noopener" title="Đã thông báo Bộ Công Thương">
                  <img className="lazyautosizes ls-is-cached lazyloaded" data-sizes="auto" src="./assets/images/dathongbaobocongthuong.png" data-src="./assets/images/dathongbaobocongthuong.png" alt="Đã thông báo Bộ Công Thương" sizes="118px" />
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}
