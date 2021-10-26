import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useHistory } from 'react-router-dom'
import $ from 'jquery'
import md5 from 'md5'
import { changePassAPI, getUser, logOutAccount, userSelector } from '../../../app/reducers/userSlice'
import InfomationUser from '../components/InfomationUser/InfomationUser'
import './User.css'

function ChangePass() {
    const user = useSelector(userSelector)
    const [password, setPassword] = useState('')
    const [newPass, setNewPass] = useState('')
    const [newPassAgain, setNewPassAgain] = useState('')
    const dispatch = useDispatch()
    const location = useHistory()

    useEffect(()=> {
        dispatch(getUser()).unwrap()
            .then(res => {
                if(!res || res.status !== 200){
                    location.replace('/user/signin')
                }
            })
    },[])

    const update = (e) => {
        e.preventDefault()
        if(md5(password) !== user.MatKhau) {
            alert('Mật khẩu cũ không chính xác!')
            $('#pass').focus()
            return
        }else if(newPass !== newPassAgain) {
            alert('Mật khẩu mới và xác nhận mật khẩu mới phải giống nhau!')
            $('#newPassAgain').focus()
            return
        }else if(password === newPass){
            alert('Mật khẩu mới và mật khẩu cũ phải khác nhau!')
            $('#newPass').focus()
            return
        }
        let data = {
            newPass
        }
        dispatch(changePassAPI(data)).unwrap()
            .then((Result) => {
                if(Result){
                    switch(Result.success) {
                        case 1:
                            alert(Result.message)
                            dispatch(logOutAccount())
                            location.replace('/user/signin')
                            // location.replace('/')
                            break
                        case 0:
                            $('#pass').focus()
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
                        <li className="breadcrumb-item active">Thay đổi mật khẩu</li>
                    </ul>
                </nav>
                <div className="col-3">
                    <InfomationUser />
                </div>
                <div className="col-9">
                    <form className="user-form" onSubmit={update}>
                        <div className="user-form-heading">
                            THAY ĐỔI MẬT KHẨU
                            <p>Bạn nên cập nhập mật khẩu thường xuyên vì lý do bảo mật!</p>
                        </div>
                        <hr />
                        <div className="m-4">
                            <label className="main-input-label" htmlFor="pass">Mật khẩu cũ: <span>(*)</span></label>
                            <input type="password" id="pass" className="main-input form-control" placeholder="Mật khẩu cũ" value={password} onChange={e => {setPassword(e.target.value)}} required />
                        </div>
                        <div className="m-4">
                            <label className="main-input-label" htmlFor="newPass">Mật khẩu mới: <span>(*)</span></label>
                            <input type="password" id="newPass" className="main-input form-control" placeholder="Mật khẩu mới" value={newPass} onChange={e => {setNewPass(e.target.value)}} required />
                        </div>
                        <div className="m-4">
                            <label className="main-input-label" htmlFor="newPassAgain">Xác nhận mật khẩu mới: <span>(*)</span></label>
                            <input type="password" id="newPassAgain" className="main-input form-control" placeholder="Xác nhận mật khẩu mới" value={newPassAgain} onChange={e => {setNewPassAgain(e.target.value)}} required />
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

export default ChangePass
