import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginAPI } from '../../../app/reducers/userSlice'
import swal from 'sweetalert2'
import { useHistory } from 'react-router'
import $ from 'jquery'
import './User.css'

export default function Signin() {
    document.title = 'Đăng nhập'
    const dispatch = useDispatch()
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('')

    const location = useHistory()
    const Toast = swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', swal.stopTimer)
          toast.addEventListener('mouseleave', swal.resumeTimer)
        }
      })
    
    const signin = async(e) => {
        e.preventDefault()
        let data = {
            "username": username,
            "password": password
        }
        dispatch(loginAPI(data)).unwrap()
            .then((result) => {
                if(result){
                    switch(result.code) {
                        case 200:
                            Toast.fire({
                                icon: 'success',
                                title: '<h3>'+result.success+'</h3>',
                            })
                            // swal.fire('Success',result.success,'success')
                            location.replace('/')
                            break
                        case 201:
                            alert(result.error)
                            $('#username').focus()
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
                        <Link to="signin" className="main-heading-link text-decoration-none form--active">Đăng nhập</Link>
                        <Link to="signup" className="main-heading-link text-decoration-none">Đăng ký</Link>
                    </div>
                    <form onSubmit={signin} className="main-form">
                        <div className="m-4">
                            <input type="text" id="username" className="main-input form-control" value={username} onChange={e => {setUsername(e.target.value)}} required placeholder="Nhập email hoặc tên đăng nhập" />
                        </div>
                        <div className="m-4">
                            <input type="password" className="main-input form-control" value={password} onChange={e => {setPassword(e.target.value)}} required placeholder="Mật khẩu " />
                        </div>
                        <div className="m-4">
                            <button type="submit" className="submit-button btn btn-pink">Đăng nhập</button>
                        </div>
                    </form>
                    <Link to="/" className="forgot-password main-link text-decoration-none">Quên mật khẩu</Link>
                    <p>Hoặc đăng nhập với</p>
                    <div className="social m-4 d-flex flex-column">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" className="f-b-login social-link text-decoration-none d-flex align-items-center justify-content-center">
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
