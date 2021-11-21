import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import $ from 'jquery'
import './User.css'
import { registerAPI } from '../../../app/reducers/userSlice'
import { PasswordInput, Input } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import dayjs from 'dayjs'
import 'dayjs/locale/vi'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'

export default function Signup() {
    document.title = 'Đăng ký'
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const [date, setDate] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')

    const location = useHistory()

    const signup = (e) => {
        e.preventDefault()
        const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        const mailFormat = / ^ [a-zA-Z0-9.! # $% & '* + / =? ^ _ `{|} ~ -] + @ [a-zA-Z0-9 -] + (?: \. [a-zA-Z0-9 -] +) * $ /;
        if (password.length < 6) {
            Swal.fire('Error', '<h2>Mật khẩu phải phải dài tối thiểu 6 kí tự</h2>', 'error')
            return
        } else if (password !== passwordAgain) {
            Swal.fire('Error', '<h2>Mật khẩu và nhập lại mật khẩu phải giống nhau</h2>', 'error')
            return
        } else if (tel !== '') {
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
        let data
        if (username !== '' && password !== '' && address !== '') {
            data = {
                "tendangnhap": username.trim(),
                "email": email.trim(),
                "MatKhau": password.trim(),
                "TenKH": name.trim(),
                "DiaChi": address.trim(),
                "DienThoai": tel.trim(),
                "NgaySinh": dayjs(date).format('YYYY-MM-DD') 
            }
            dispatch(registerAPI(data)).unwrap()
                .then((registerResult) => {
                    if (registerResult) {
                        switch (registerResult.code) {
                            case 200:
                                Swal.fire('Thành công', '<h2>' + registerResult.success + '</h2>', 'success')
                                location.replace('/user/signin')
                                break
                            case 201:
                                $('#username').focus()
                                Swal.fire('Thất bại', '<h2>' + registerResult.error + '</h2>', "error")
                                break
                            case 202:
                                Swal.fire('Thất bại', '<h2>' + registerResult.error + '</h2>', "error")
                                break
                            case 203:
                                Swal.fire('Thất bại', '<h2>' + registerResult.error + '</h2>', "error")
                                break
                            default: return
                        }
                    }
                })
        }
    }
    return (
        <div className="container text-center">
            <div className="row">
                {/* <div class="m-auto"> */}
                <div className="main-log">
                    <div className="main-form-heading">
                        <Link to="signin" className="main-heading-link text-decoration-none">Đăng nhập</Link>
                        <Link to="signup" className="main-heading-link text-decoration-none form--active">Đăng ký</Link>
                    </div>
                    <form id="signupForm" className="main-form" onSubmit={signup}>
                        <div className="m-4">
                            <Input
                                placeholder="Tên đăng nhập (*)"
                                size="md"
                                className="main-input"
                                value={username}
                                onChange={e => { setUsername(e.target.value) }}
                                required
                            />
                            {/* <input type="text" id="username" className="main-input form-control" value={username} onChange={e => { setUsername(e.target.value) }} placeholder="Tên đăng nhập (*)" required /> */}
                        </div>
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
                                value={date}
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
                                type="email"
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
                            <PasswordInput
                                placeholder="Mật khẩu (*)"
                                className="main-input"
                                size="md"
                                value={password}
                                onChange={e => { setPassword(e.target.value) }}
                                required
                            />
                            {/* <input type="password" className="main-input form-control" value={password} onChange={e => { setPassword(e.target.value) }} placeholder="Mật khẩu (*)" required /> */}
                        </div>
                        <div className="m-4">
                            <PasswordInput id="passwordAgain" className="main-input" size="md" value={passwordAgain} onChange={e => { setPasswordAgain(e.target.value) }} placeholder="Nhập lại mật khẩu (*)" required />
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
