import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import $ from 'jquery'
import { Link, useHistory } from 'react-router-dom'
import { getUser, updateAPI } from '../../../app/reducers/userSlice'
import InfomationUser from '../components/InfomationUser/InfomationUser'
import './User.css'

function InfoUser() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('') 
    const [address, setAddress] = useState('') 
    const [tel, setTel] = useState('') 
    const [date, setDate] = useState('') 
    const dispatch = useDispatch()
    const location = useHistory()
    useEffect(()=> {
        dispatch(getUser()).unwrap()
            .then(res => {
                if(res && res.status === 200){
                    setName(res.user.TenKH)
                    setDate(res.user.NgaySinh)
                    setEmail(res.user.email)
                    setTel(res.user.DienThoai)
                    setAddress(res.user.DiaChi)
                }else location.replace('/user/signin')
            })
    },[location.location])

    const update = (e) => {
        e.preventDefault()
        let data = {
            "email": email.trim(),
            "name": name.trim(),
            "DiaChi": address.trim(),
            "DienThoai": tel.trim(),
            "NgaySinh": date.trim()
        }
        dispatch(updateAPI(data)).unwrap()
            .then((Result) => {
                if(Result){
                    switch(Result.success) {
                        case 1:
                            alert(Result.message)
                            location.replace('/')
                            break
                        case 0:
                            $('#name').focus()
                            alert(Result.message)
                            break
                        default: return
                    }
                }
            })
    }
    return (
        <div className="container">
            <div className="row">
                <nav aria-label="breadcrumb" className="mt-4">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className="header__link text-decoration-none">Trang chủ</Link></li>
                        <li className="breadcrumb-item">Thông tin tài khoản</li>
                        <li className="breadcrumb-item active">Hồ sơ</li>
                    </ul>
                </nav>
                <div className="col-3">
                    <InfomationUser/>
                </div>
                <div className="col-9">
                    <form className="user-form" onSubmit={update}>
                        <div className="user-form-heading">
                            HỒ SƠ CỦA TÔI
                            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                        </div>
                        <hr />
                        <div className="m-4">
                            <label className="main-input-label" htmlFor="name">Họ tên: <span>(*)</span></label>
                            <input type="text" id="name" className="main-input form-control"  value={name} onChange={e => {setName(e.target.value)}} placeholder="Họ tên (*)" required />
                        </div>
                        <div className="m-4">
                            <label className="main-input-label" htmlFor="date">Ngày sinh: <span>(*)</span></label>
                            <input type="date" id="date" className="main-input form-control"  value={date} onChange={e => {setDate(e.target.value)}} required />
                        </div>
                        <div className="m-4">
                            <label className="main-input-label" htmlFor="tel">Điện thoại: <span>(*)</span></label>
                            <input type="tel" id="tel" className="main-input form-control"  value={tel} onChange={e => {setTel(e.target.value)}} placeholder="Điện thoại (*)" required />
                        </div>
                        <div className="m-4">
                            <label className="main-input-label" htmlFor="email">Email: <span>(*)</span></label>
                            <input type="email" id="email" className="main-input form-control"  value={email} onChange={e => {setEmail(e.target.value)}} placeholder="Email (*)" required />
                        </div>
                        <div className="m-4">
                            <label className="main-input-label" htmlFor="address">Địa chỉ: <span>(*)</span></label>
                            <input type="text" id="address" className="main-input form-control"  value={address} onChange={e => {setAddress(e.target.value)}} placeholder="Địa chỉ chi tiết (*)" required />
                        </div>
                        <div className="m-4">
                            <button type="submit" className="submit-button btn btn-pink">Cập nhật</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InfoUser