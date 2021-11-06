import React from 'react'
import { useSelector } from 'react-redux'
import { chu_deSelector, hoa_donSelector, khach_hangSelector, san_phamSelector } from '../../../../app/reducers/adminSlice'

function HeaderCard() {
    const products = useSelector(san_phamSelector)
    const khach_hang = useSelector(khach_hangSelector)
    const chu_de = useSelector(chu_deSelector)
    const don_hang = useSelector(hoa_donSelector)
    return (
        <div>
            <div className="clearfix" />
            <br />
            <div className="col-div-3">
                <div className="box">
                    <p>{khach_hang.length}<br /><span>Khách Hàng</span></p>
                    <i className="fa fa-users box-icon" />
                </div>
            </div>
            <div className="col-div-3">
                <div className="box">
                    <p>{products.length}<br /><span>Sản phẩm</span></p>
                    <i className="fa fa-list box-icon" />
                </div>
            </div>
            <div className="col-div-3">
                <div className="box">
                    <p>{don_hang.length}<br /><span>Đơn hàng</span></p>
                    <i className="fa fa-shopping-bag box-icon" />
                </div>
            </div>
            <div className="col-div-3">
                <div className="box">
                    <p>{chu_de.length} <br /><span>Loại sản phẩm</span></p>
                    <i className="fa fa-tasks box-icon" />
                </div>
            </div>
            <div className="clearfix" />
            <br /><br />
        </div>
    )
}

export default HeaderCard
