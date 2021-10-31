import React, { useEffect } from 'react'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, userSelector } from '../../../../app/reducers/userSlice'
import { getChu_de, getHoa_don, getKhach_hang, getNha_cc, getNha_xb, getSan_pham } from '../../../../app/reducers/adminSlice'
import { useHistory } from 'react-router'

function HeaderAdmin() {
    const dispatch = useDispatch()
    const location = useHistory()
    useEffect(() => {
        dispatch(getUser())
        dispatch(getSan_pham())
        dispatch(getChu_de())
        dispatch(getHoa_don())
        dispatch(getKhach_hang())
        dispatch(getNha_xb())
        dispatch(getNha_cc())
        nav()
    },[location.location])
    const user = useSelector(userSelector)

    const nav = () => {
        $("#mySidenav").css('width', '70px');
        $("#main").css('margin-left', '70px');
        $(".logo").css('visibility', 'hidden');
        $(".logo span").css('visibility', 'visible');
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
        $(".icon-a").css('visibility', 'visible');
        $(".icons").css('visibility', 'visible');
        $(".nav").css('display', 'block');
        $(".nav2").css('display', 'none');
    }

    return (
        <div className="head">
            <div className="col-div-6">
                <span style={{ fontSize: '30px', cursor: 'pointer', color: '#272c4a' }} className="nav" onClick={nav}>☰ Dashboard</span>
                <span style={{ fontSize: '30px', cursor: 'pointer', color: '#272c4a' }} className="nav2" onClick={nav2}>☰ Dashboard</span>
            </div>
            <div className="col-div-6">
                <div className="profile">
                    <img src="/assets/images/avatar.png" className="pro-img" />
                    <p>{user.TenNV} <span>{user.TenQuyen}</span></p>
                </div>
            </div>
            <div className="clearfix" />
        </div>

    )
}

export default HeaderAdmin
