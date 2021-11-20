import React, { useEffect } from 'react'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logOutAccount, userSelector } from '../../../../app/reducers/userSlice'
import Swal from 'sweetalert2'
import { getChu_de, getHoa_don, getKhach_hang, getNha_cc, getNha_xb, getSan_pham } from '../../../../app/reducers/adminSlice'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

function HeaderAdmin() {
    const dispatch = useDispatch()
    const user = useSelector(userSelector)
    const location = useHistory()
    useEffect(() => {
        dispatch(getSan_pham())
        dispatch(getChu_de())
        dispatch(getHoa_don())
        dispatch(getKhach_hang())
        dispatch(getNha_xb())
        dispatch(getNha_cc())
        dispatch(getUser()).unwrap()
            .then(res => {
                if (res && res.status === 200 && res.user.MaNV !== '0') { } else if (res && res.status === 200 && res.user.MaNV === '0') {
                    Swal.fire('Cảnh báo', '<h1>Bạn không phải Admin để vào trang này</h1>', 'warning')
                        .then(res => {
                            if (res.isConfirmed) {
                                location.replace('/')
                            }
                        })
                } else {
                    Swal.fire('Cảnh báo', '<h1>Bạn phải đăng nhập để vào trang này</h1>', 'warning')
                        .then(res => {
                            if (res.isConfirmed) {
                                location.replace('/user/signin')
                            }
                        })
                }
            })
        nav()
    }, [location.location])

    const nav = () => {
        $("#mySidenav").css('width', '70px');
        $("#main").css('margin-left', '70px');
        $(".logo").css('visibility', 'hidden');
        $(".logo span").css('visibility', 'visible');
        $("a span").hide(100);
        $(".logo span").css('margin-left', '-10px');
        $(".icon-a").css('visibility', 'hidden');
        $(".icons").css('visibility', 'visible');
        $(".icons").css('margin-left', '-8px');
        $(".nav").css('display', 'none');
        $(".nav2").css('display', 'block');
    }

    const nav2 = () => {
        $("#mySidenav").css('width', '300px');
        $("#main").css('margin-left', '300px');
        $(".logo").css('visibility', 'visible');
        $("a span").show(400);
        $(".icon-a").css('visibility', 'visible');
        $(".icons").css('visibility', 'visible');
        $(".nav").css('display', 'block');
        $(".nav2").css('display', 'none');
    }

    const logOut = () => {
        dispatch(logOutAccount())
        Swal.fire('Cảnh báo', '<h1>Bạn phải đăng nhập để vào trang này</h1>', 'warning')
            .then(res => {
                if (res.isConfirmed) {
                    location.replace('/user/signin')
                }
            })
    }

    return (
        <div className="head">
            <div className="col-div-6">
                <span style={{ fontSize: '30px', cursor: 'pointer', color: '#272c4a' }} className="nav" onClick={nav}>☰ Dashboard</span>
                <span style={{ fontSize: '30px', cursor: 'pointer', color: '#272c4a' }} className="nav2" onClick={nav2}>☰ Dashboard</span>
            </div>
            <div className="col-div-6">
                <Link to="/admin/account" className="profile text-decoration-none">
                    <img src="/assets/images/avatar.png" className="pro-img" />
                    <p>{user.TenNV} <span>{user.TenQuyen}</span></p>
                </Link>
                <ul className="user-nav">
                    <li><Link to="/admin/account/changepass" className="text-decoration-none">Đổi mật khẩu</Link></li>
                    <li onClick={logOut}>Đăng xuất</li>
                </ul>
            </div>
            <div className="clearfix" />
        </div>

    )
}

export default HeaderAdmin
