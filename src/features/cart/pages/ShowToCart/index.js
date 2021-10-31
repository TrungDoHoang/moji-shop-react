import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartSelector } from '../../../../app/reducers/cartSlice'
import TableCartItem from '../../components/TableCartItem'
import './ShowToCart.css'

function ShowToCart() {
    window.scrollTo(0,0)
    const items = useSelector(cartSelector)
    document.title = "Giỏ hàng"
    let toTal = items.reduce((total, item) => {
        return total + item.cost * item.quantity;
    }, 0)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-5 mb-5">
                    <table className="table table-cart">
                        <thead>
                            <tr>
                                <th width="10%">Ảnh</th>
                                <th width="35%">Tên sản phẩm</th>
                                <th width="15%">Đơn giá</th>
                                <th width="15%">Số lượng</th>
                                <th width="15%">Tổng</th>
                                <th width="10%">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => {
                                return <TableCartItem key={item.id} id={item.id} name={item.name} cost={item.cost}
                                    quantity={item.quantity} img={item.img} soluong={item.SoLuong}/>
                            })}
                        </tbody>
                    </table>
                    <div className="note">
                        <p>Hỗ trợ ship 20k cho đơn hàng từ 300k nội thành HN, HCM</p>
                        <p>Hỗ trợ ship 30k cho đơn hàng từ 500k toàn quốc</p>
                        <p>Đơn hàng trên website được xử lý trong giờ hành chính</p>
                    </div>
                    <div className="cart-total text-end">
                        <div className="total d-block">
                            Tổng: {toTal.toLocaleString()}<sub>đ</sub>
                        </div>
                        <div className="clearfix"></div>
                        <Link className="btn btn-lg btn-pink btn-radius" to="/shop">Tiếp tục mua sắm</Link>
                        <Link className="ms-3 btn btn-lg btn-pink btn-outline-pink btn-radius" to="/cart/pay">Thanh toán</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowToCart
