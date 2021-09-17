import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'

export default function Signin() {
    return (
        <div className="container text-center">
            <div className="row">
                {/* <div class="m-auto"> */}
                <div className="main-log">
                    <div className="main-heading">
                        <Link to="signin" className="main-heading-link text-decoration-none active">Đăng nhập</Link>
                        <Link to="signup" className="main-heading-link text-decoration-none">Đăng ký</Link>
                    </div>
                    <form method="POST" className="main-form">
                        <div className="m-4">
                            <input type="text" className="main-input form-control" required placeholder="Nhập email hoặc tên đăng nhập" />
                        </div>
                        <div className="m-4">
                            <input type="password" className="main-input form-control" required placeholder="Mật khẩu " />
                        </div>
                        <div className="m-4">
                            <button type="submit" className="submit-button btn btn-pink">Đăng nhập</button>
                        </div>
                    </form>
                    <Link to="/" className="forgot-password main-link text-decoration-none">Quên mật khẩu</Link>
                    <p>Hoặc đăng nhập với</p>
                    <div className="social m-4 d-flex flex-column">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" className="f-b social-link text-decoration-none d-flex align-items-center justify-content-center">
                            <ion-icon name="logo-facebook" />
                            Đăng nhập với Facebook
                        </a>
                        <a href="https://accounts.google.com/" target="_blank" rel="noreferrer noopener" className="g-g social-link text-decoration-none d-flex align-items-center justify-content-center">
                            <ion-icon name="logo-google" />
                            Đăng nhập với Google
                        </a>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}
