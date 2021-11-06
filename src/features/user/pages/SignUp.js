import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import $ from 'jquery'
import './User.css'
import { registerAPI } from '../../../app/reducers/userSlice'
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
        if(password !== passwordAgain) {
            Swal.fire('Error','<h1>Mật khẩu và nhập lại mật khẩu phải giống nhau</h1>','error')
            $('#passwordAgain').focus()
            return
        }
        let data = {
            "tendangnhap": username,
            "email": email,
            "MatKhau": password,
            "TenKH": name,
            "DiaChi": address,
            "DienThoai": tel,
            "NgaySinh": date
        }
        dispatch(registerAPI(data)).unwrap()
            .then((registerResult) => {
                if(registerResult){
                    switch(registerResult.code) {
                        case 200:
                            Swal.fire('Thành công','<h1>'+registerResult.success+'</h1>', 'success')
                            location.replace('/user/signin')
                            break
                        case 201:
                            $('#username').focus()
                            Swal.fire('Thất bại','<h1>'+registerResult.error+'</h1>',"error")
                            break
                        case 202:
                            Swal.fire('Thất bại','<h1>'+registerResult.error+'</h1>',"error")
                            break
                        case 203:
                            Swal.fire('Thất bại','<h1>'+registerResult.error+'</h1>',"error")
                            break
                        default: return
                    }
                }
            })
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
                            <input type="text" id="username" className="main-input form-control" value={username} onChange={e => {setUsername(e.target.value)}} placeholder="Tên đăng nhập (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="text" className="main-input form-control"  value={name} onChange={e => {setName(e.target.value)}} placeholder="Họ tên (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="date" className="main-input form-control"  value={date} onChange={e => {setDate(e.target.value)}} required />
                        </div>
                        <div className="m-4">
                            <input type="tel" className="main-input form-control"  value={tel} onChange={e => {setTel(e.target.value)}} placeholder="Điện thoại (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="email" className="main-input form-control"  value={email} onChange={e => {setEmail(e.target.value)}} placeholder="Email (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="text" className="main-input form-control"  value={address} onChange={e => {setAddress(e.target.value)}} placeholder="Địa chỉ chi tiết (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="password" className="main-input form-control" value={password} onChange={e => {setPassword(e.target.value)}} placeholder="Mật khẩu (*)" required />
                        </div>
                        <div className="m-4">
                            <input type="password" id="passwordAgain" className="main-input form-control" value={passwordAgain} onChange={e => {setPasswordAgain(e.target.value)}} placeholder="Nhập lại mật khẩu (*)" required />
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
