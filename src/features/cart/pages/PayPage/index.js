import { isEmptyObject } from 'jquery'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import wal from 'sweetalert2'
import { cartSelector, payBill } from '../../../../app/reducers/cartSlice'
import { getProducts } from '../../../../app/reducers/productsSlice'
import { userSelector } from '../../../../app/reducers/userSlice'
import TableCartItem from '../../components/TableCartItem'

function PayPage() {
    document.title = "Thanh toán"
    const items = useSelector(cartSelector)
    const user = useSelector(userSelector)
    const location = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        if (isEmptyObject(user)) {
            wal.fire('Thông Báo!','<h1>Bạn phải đăng nhập để thanh toán!!! <3</h1>','warning')
            location.replace('/user/signin')
        }
        window.scrollTo(0, 0)
    }, [location.location])

    let toTal = items.reduce((total, item) => {
        return total + item.cost * item.quantity;
    }, 0)

    const pay = () => {
        if (items.length <= 0) {
            location.replace('/')
            return
        }
        const data = {
            MaKH: user.MaKH,
            items,
            total: toTal
        }
        dispatch(payBill(data)).unwrap()
            .then(res => {
                if (res.code === 200) {
                    wal.fire('Success!',res.success,'success')
                    dispatch(getProducts())
                    location.replace('/')
                }
                else wal.fire('Error!',res.error,'error')
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center m-4">THÔNG TIN NGƯỜI ĐẶT</h2>
                    <table className="table table-cart">
                        <thead>
                            <tr>
                                <th width="20%">Họ tên</th>
                                <th width="35%">Địa chỉ</th>
                                <th width="15%">Email</th>
                                <th width="15%">Ngày Sinh</th>
                                <th width="15%">Điện thoại</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-cart-item">
                                <td>{user.TenKH}</td>
                                <td>{user.DiaChi}</td>
                                <td>{user.email}</td>
                                <td>{user.NgaySinh}</td>
                                <td>{user.DienThoai}</td>
                            </tr>
                        </tbody>
                        <tbody>

                        </tbody>
                    </table>
                    <h2 className="text-center m-4">THÔNG TIN MẶT HÀNG</h2>
                    <table className="table table-cart">
                        <thead>
                            <tr>
                                <th width="15%">Ảnh</th>
                                <th width="40%">Tên sản phẩm</th>
                                <th width="15%">Đơn giá</th>
                                <th width="15%">Số lượng</th>
                                <th width="15%">Tổng</th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map(item => {
                                return <TableCartItem key={item.id} id={item.id} name={item.name} cost={item.cost}
                                    quantity={item.quantity} img={item.img} soluong={item.SoLuong} read={true} />
                            })}
                            <tr className="table-cart-item">
                                <td colSpan="5">
                                    <div className="total text-end d-block">
                                        Tổng: {toTal.toLocaleString()}<sub>đ</sub>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-end">
                        <div className="ms-3 btn btn-lg btn-pink btn-outline-pink btn-radius" onClick={pay}>Xác nhận đặt hàng</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayPage
