import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'

export default function Signup() {
    document.title = 'Đăng ký'
    return (
        <div className="container text-center">
            <div className="row">
                {/* <div class="m-auto"> */}
                <div className="main-log">
                    <div className="main-form-heading">
                        <Link to="signin" className="main-heading-link text-decoration-none">Đăng nhập</Link>
                        <Link to="signup" className="main-heading-link text-decoration-none form--active">Đăng ký</Link>
                    </div>
                    <form method="POST" className="main-form">
                        <div className="m-4">
                            <input type="text" className="main-input form-control" placeholder="Tên đăng nhập (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="text" className="main-input form-control" placeholder="Họ tên (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="date" className="main-input form-control" required />
                        </div>
                        <div className="m-4">
                            <input type="tel" className="main-input form-control" placeholder="Điện thoại (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="email" className="main-input form-control" placeholder="Email (*)" required />
                        </div>
                        <div className="m-4">
                            <select className="form-select main-select" required>
                                <option defaultValue>Tỉnh/Thành phố *</option>
                                <option value={1}>Bắc Ninh</option>
                                <option value={2}>Hà Nội</option>
                                <option value={3}>Hải Phòng</option>
                                <option value={4}>Hưng Yên</option>
                            </select>
                        </div>
                        <div className="m-4">
                            <select className="form-select main-select" required>
                                <option defaultValue>Quận/Huyện *</option>
                                <option value={1}>A</option>
                                <option value={2}>B</option>
                                <option value={3}>C</option>
                            </select>
                        </div>
                        <div className="m-4">
                            <input type="text" className="main-input form-control" placeholder="Địa chỉ chi tiết (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="password" className="main-input form-control" placeholder="Mật khẩu (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="password" className="vali main-input form-control" placeholder="Nhập lại mật khẩu (*)" required />
                        </div>
                        <div className="m-4">
                            <button type="submit" className="submit-button btn btn-pink">Đăng ký</button>
                        </div>
                    </form>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
