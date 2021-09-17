import React from 'react'
import { Link } from 'react-router-dom'

export default function Err404() {
    return (
        <div className="container text-center mt-5">
            <div>
                <img src="https://moji.vn/tp/T0299/img/404.png" alt="" className="w-50" />
            </div>
            <Link to="/" className="btn btn-pink m-5">Quay về trang chủ</Link>
        </div>
    )
}
