import md5 from 'md5'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'
import { useHistory } from 'react-router'
import Swal from 'sweetalert2'
import { changePassAPI, getUser, logOutAccount, userSelector } from '../../../../app/reducers/userSlice'

function ChangePass() {
    const user = useSelector(userSelector)
    const [password, setPassword] = useState('')
    const [newPass, setNewPass] = useState('')
    const [newPassAgain, setNewPassAgain] = useState('')
    const dispatch = useDispatch()
    const location = useHistory()

    useEffect(() => {
        dispatch(getUser()).unwrap()
            .then(res => {
                if (!res || res.status !== 200) {
                    location.replace('/user/signin')
                }
            })
    }, [])

    const update = (e) => {
        e.preventDefault()
        if (md5(password) !== user.MatKhau) {
            Swal.fire('Thất bại', '<h1>Mật khẩu cũ không chính xác!</h1>', 'error')
                .then(result => {
                    if (result.isConfirmed) {
                        $('#pass').focus()
                    }
                })
            return
        } else if (newPass !== newPassAgain) {
            Swal.fire('Thất bại', '<h1>Mật khẩu mới và xác nhận mật khẩu mới phải giống nhau!</h1>', 'error')
                .then(result => {
                    if (result.isConfirmed) {
                        $('#newPassAgain').focus()
                    }
                })
            return
        } else if (password === newPass) {
            Swal.fire('Thất bại', '<h1>Mật khẩu mới và mật khẩu cũ phải khác nhau!</h1>', 'error')
                .then(result => {
                    if (result.isConfirmed) {
                        $('#newPass').focus()
                    }
                })
            return
        }
        let data = {
            newPass
        }
        dispatch(changePassAPI(data)).unwrap()
            .then((Result) => {
                if (Result) {
                    switch (Result.success) {
                        case 1:
                            Swal.fire('Thành công', '<h1>' + Result.message + '</h1>', 'success')
                                .then(result => {
                                    if (result.isConfirmed) {
                                        dispatch(logOutAccount())
                                        location.replace('/user/signin')
                                    }
                                })
                            // location.replace('/')
                            break
                        case 0:
                            $('#pass').focus()
                            Swal.fire('Thất bại', '<>' + Result.message + '</h1>', 'error')
                            break
                        default: return
                    }
                }
            })
    }
    return (
        <div className="col-div-8">
            <div className="box-8">
                <form className="p-4" onSubmit={update}>
                    <div className="user-form-heading size-2">
                        THAY ĐỔI MẬT KHẨU
                        <p>Bạn nên cập nhập mật khẩu thường xuyên vì lý do bảo mật!</p>
                    </div>
                    <hr />
                    <div className="m-4">
                        <label className="main-input-label" htmlFor="pass">Mật khẩu cũ: <span>(*)</span></label>
                        <input type="password" id="pass" className="main-input form-control" placeholder="Mật khẩu cũ" value={password} onChange={e => { setPassword(e.target.value) }} required />
                    </div>
                    <div className="m-4">
                        <label className="main-input-label" htmlFor="newPass">Mật khẩu mới: <span>(*)</span></label>
                        <input type="password" id="newPass" className="main-input form-control" placeholder="Mật khẩu mới" value={newPass} onChange={e => { setNewPass(e.target.value) }} required />
                    </div>
                    <div className="m-4">
                        <label className="main-input-label" htmlFor="newPassAgain">Xác nhận mật khẩu mới: <span>(*)</span></label>
                        <input type="password" id="newPassAgain" className="main-input form-control" placeholder="Xác nhận mật khẩu mới" value={newPassAgain} onChange={e => { setNewPassAgain(e.target.value) }} required />
                    </div>
                    <div className="m-4">
                        <button type="submit" className="submit-button btn btn-pink">Cập nhật</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePass
