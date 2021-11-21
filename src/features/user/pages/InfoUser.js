import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import $ from 'jquery'
import { Link, useHistory } from 'react-router-dom'
import { getUser, updateAPI } from '../../../app/reducers/userSlice'
import InfomationUser from '../components/InfomationUser/InfomationUser'
import { Input } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/vi'
import './User.css'
import Swal from 'sweetalert2'

function InfoUser() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('') 
    const [address, setAddress] = useState('') 
    const [tel, setTel] = useState('') 
    const [date, setDate] = useState('') 
    const dispatch = useDispatch()
    const location = useHistory()
    dayjs.extend(localizedFormat)
    useEffect(()=> {
        dispatch(getUser()).unwrap()
            .then(res => {
                if(res && res.status === 200){
                    setName(res.user.TenKH)
                    setDate(new Date(res.user.NgaySinh))
                    setEmail(res.user.email)
                    setTel(res.user.DienThoai)
                    setAddress(res.user.DiaChi)
                }else location.replace('/user/signin')
            })
    },[location.location])

    const update = (e) => {
        e.preventDefault()
        const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        const mailFormat = / ^ [a-zA-Z0-9.! # $% & '* + / =? ^ _ `{|} ~ -] + @ [a-zA-Z0-9 -] + (?: \. [a-zA-Z0-9 -] +) * $ /;
        if (tel !== '') {
            if (!vnf_regex.test(tel)) {
                Swal.fire('Error', '<h2>Số điện thoại của bạn không đúng định dạng</h2>', 'error')
                return
            }
        } else if (tel === '') {
            Swal.fire('Error', '<h2>Bạn chưa điền số điện thoại!</h2>', 'error')
            return
        } else if (!email.match(mailFormat)) {
            Swal.fire('Error', '<h2>Email của bạn không đúng định dạng</h2>', 'error')
            return
        }
        let data = {
            "email": email.trim(),
            "name": name.trim(),
            "DiaChi": address.trim(),
            "DienThoai": tel.trim(),
            "NgaySinh": dayjs(date).format('YYYY-MM-DD') 
        }
        dispatch(updateAPI(data)).unwrap()
            .then((Result) => {
                if(Result){
                    switch(Result.success) {
                        case 1:
                            Swal.fire('Thành công','<h1>'+Result.message+'</h1>','success')
                            location.replace('/')
                            break
                        case 0:
                            $('#name').focus()
                            Swal.fire('Thất bại','<>'+Result.message+'</h1>','error')
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
                            <Input
                                placeholder="Họ tên (*)"
                                size="md"
                                className="main-input"
                                value={name}
                                onChange={e => { setName(e.target.value) }}
                                required
                            />
                            {/* <input type="text" className="main-input form-control" value={name} onChange={e => { setName(e.target.value) }} placeholder="Họ tên (*)" required /> */}
                        </div>
                        <div className="m-4">
                            <DatePicker
                                placeholder="Ngày sinh"
                                value={ date }
                                size="md"
                                className="main-input"
                                withSelect
                                yearsRange={{ from: 1900, to: new Date().getFullYear()}}
                                minDate={new Date(1900, 1, 1)}
                                maxDate={new Date()}
                                onChange={setDate}
                                required
                            />
                            {/* <input type="date" className="main-input form-control" value={date} onChange={e => { setDate(e.target.value) }} required /> */}
                        </div>
                        <div className="m-4">
                            <Input
                                type="tel"
                                placeholder="Điện thoại (*)"
                                size="md"
                                className="main-input"
                                value={tel}
                                onChange={e => { setTel(e.target.value) }}
                                required
                            />
                            {/* <input type="tel" className="main-input form-control" value={tel} onChange={e => { setTel(e.target.value) }} placeholder="Điện thoại (*)" required /> */}
                        </div>
                        <div className="m-4">
                            <Input
                                placeholder="Email (*)"
                                size="md"
                                className="main-input"
                                value={email}
                                onChange={e => { setEmail(e.target.value) }}
                                required
                            />
                            {/* <input type="email" className="main-input form-control" value={email} onChange={e => { setEmail(e.target.value) }} placeholder="Email (*)" required /> */}
                        </div>
                        <div className="m-4">
                            <Input
                                placeholder="Địa chỉ (*)"
                                size="md"
                                className="main-input"
                                value={address}
                                onChange={e => { setAddress(e.target.value) }}
                                required
                            />
                            {/* <input type="text" className="main-input form-control" value={address} onChange={e => { setAddress(e.target.value) }} placeholder="Địa chỉ chi tiết (*)" required /> */}
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
