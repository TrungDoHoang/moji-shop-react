import { isEmptyObject } from 'jquery'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { useQueryParam, NumberParam } from 'use-query-params'
import { detailSelector, showTinTuc } from '../../../../app/reducers/newsSlice'
import './NewsDetail.css'

function NewsDetail() {
    const [posts, setPosts] = useQueryParam('posts', NumberParam)
    const detail = useSelector(detailSelector)
    const dispatch = useDispatch()
    const location = useHistory()
    useEffect(() => {
        window.scrollTo(0,0)
        if(posts){
            dispatch(showTinTuc(posts))
        }
    },[location.location])
    if(isEmptyObject(detail)){
        dispatch(showTinTuc(posts))
    }
    document.title = detail.TieuDe
    return (
        <div className="container text-center">
            <div className="row">
                {/* <div class="m-auto"> */}
                <div className="main mt-4">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" className="header__link text-decoration-none">Trang chủ</Link></li>
                            <li className="breadcrumb-item"><Link to="/news" className="header__link text-decoration-none">{detail.TenLoaiTin}</Link></li>
                            <li className="breadcrumb-item active">{detail.TieuDe}</li>
                        </ul>
                    </nav>
                    <div className="mt-4 text-23 text-center">
                        <b>{detail.TieuDe}</b>
                        <p className="text-14">Ngày tạo: {detail.NgayTao}</p>
                        <p className="text-14 text-start">{detail.MoTa}</p>
                    </div>
                    <div className="content__news__header text-start mt-5">
                        <b>
                            Các khách hàng của Moji thân mến,
                        </b>
                        <br />
                    </div>
                    <div className="content__news__body text-start mt-3">
                        {detail.NoiDung}
                    </div>
                    <div className="content__news__end mt-3 d-inline float-end">
                        Trân trọng,
                        <p><b>{detail.TenNV}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail
