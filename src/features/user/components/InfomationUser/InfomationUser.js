import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { logOutAccount, userSelector } from '../../../../app/reducers/userSlice'
import './InfomationUser.css'

function InfomationUser() {
    const dispatch = useDispatch()
    const location = useHistory()
    const user = useSelector(userSelector)
    const logOut = e => {
        e.preventDefault();
        dispatch(logOutAccount())
        location.replace('/user/signin')
    }
    return (
        <div className="information">
            <div className="information-img">
                <img src="/assets/images/avatar.png" alt="Avatar" />
            </div>
            <div className="information-name mt-2 mb-2">
                {user.TenKH}
            </div>
            <ul className="information-actions list-unstyled">
                <li className="information-actions-item">
                    <NavLink activeClassName="active" to="info" className="information-link text-decoration-none">Thông tin tài khoản</NavLink>
                </li>
                <li className="information-actions-item">
                    <NavLink activeClassName="active" to="changePass" className="information-link text-decoration-none">Đổi mật khẩu</NavLink>
                </li>
                <li className="information-actions-item">
                    <NavLink activeClassName="active" to="order" className="information-link text-decoration-none">Lịch sử đơn hàng</NavLink>
                </li>
                <li className="information-actions-item" style={{ fontWeight: 'bold' }}>
                    <NavLink activeClassName="active" to="/logout" onClick={logOut} className="information-link text-decoration-none">Đăng xuất</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default InfomationUser
