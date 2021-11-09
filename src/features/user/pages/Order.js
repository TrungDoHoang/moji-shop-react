import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import InfomationUser from '../components/InfomationUser/InfomationUser'
import DataTable from 'react-data-table-component';
import $ from 'jquery'
import './User.css'
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, getUser, orderSelector, userSelector } from '../../../app/reducers/userSlice';
import Swal from 'sweetalert2';
import { cthoa_donSelector, deleteHoa_don, getCTHoa_don } from '../../../app/reducers/adminSlice';

function Order() {
    const dispatch = useDispatch()
    const location = useHistory()
    const user = useSelector(userSelector)
    const order = useSelector(orderSelector)
    const cthoa_don = useSelector(cthoa_donSelector)
    window.scrollTo(0, 0)
    useEffect(() => {
        document.title = 'Order'
        dispatch(getUser()).unwrap()
            .then(res => {
                if (!res || res.status !== 200) {
                    location.replace('/user/signin')
                }
                else {
                    dispatch(getOrder(res.user.MaKH))
                    dispatch(getCTHoa_don())
                }
            })
    }, [location.location])

    const deleteBill = id => {
        const data = {
            'SoHDB': id
        }
        Swal.fire({
            title: `<h1>Bạn có thật sự muốn hủy hóa đơn ${id}?</h1>`,
            showDenyButton: true,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {

                cancelButton: 'btn btn-danger size-2',
                confirmButton: 'btn btn-success size-2',
                denyButton: 'btn btn-default size-2',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteHoa_don(data)).unwrap()
                    .then(res => {
                        if (res.code) {
                            Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
                            return dispatch(getOrder(user.MaKH))
                        }
                        else {
                            Swal.fire('Error!', '<h1>' + res.message + '</h1>', 'error')
                        }
                    })
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    const View = id => {
        $('html, body').animate({
            scrollTop: $('#chitiet').offset().top - 100
        }, 'slow')
        dispatch(getCTHoa_don(id))
    }

    const styleTitle = {
        fontSize: '1.5rem',
    }
    const data = order
    const data_ct = cthoa_don
    const columns = [
        {
            selector: row => row.SoHDB,
            name: 'Mã HDB',
            sortable: true,
            style: styleTitle
        },
        {
            name: 'Ngày bán',
            selector: row => row.NgayBan,
            sortable: true,
            style: styleTitle
        },
        {
            name: 'Tổng tiền',
            selector: row => row.Total,
            sortable: true,
            style: styleTitle,
        },
        {
            name: 'Trạng thái',
            selector: row => row.Status === '0' ? 'Đang giao' : 'Đã giao',
            sortable: true,
            style: styleTitle
        },
        {
            name: "Thao tác",
            cell: (row) => (
                <>
                    <span onClick={() => View(row.SoHDB)} className='btn btn-info me-2'>Xem thêm</span>{'    '}
                    {
                        row.Status === '0' ?
                            <span onClick={() => deleteBill(row.SoHDB)} className='btn btn-danger'>Hủy đơn</span>
                            :
                            ''
                    }
                </>
            ),
            style: styleTitle
        }
    ]
    const columns_ct = [
        {
            selector: row => row.SoHDB,
            name: 'Mã HDB',
            sortable: true,
            style: styleTitle,
            center: true,
            width: '12%'
        },
        {
            name: 'Tên sản phẩm',
            selector: row => row.TenSanPham,
            sortable: true,
            style: styleTitle,
            center: true,
            width: '35%',
        },
        {
            name: 'Giá',
            selector: row => Number.parseInt(row.DonGiaBan).toLocaleString(),
            sortable: true,
            style: styleTitle,
            center: true,
            width: '15%'
        },
        {
            name: 'Số lượng mua',
            selector: row => Number.parseInt(row.SLBan).toLocaleString(),
            sortable: true,
            style: styleTitle,
            center: true,
            width: '16%'
        },

        {
            name: 'Tổng tiền',
            selector: row => Number.parseInt(row.SLBan * row.DonGiaBan).toLocaleString(),
            sortable: true,
            style: styleTitle,
            center: true,
            width: '16%'
        },

    ]

    return (
        <div className="container">
            <div className="row">
                <nav aria-label="breadcrumb" className="mt-4">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className="header__link text-decoration-none">Trang chủ</Link></li>
                        <li className="breadcrumb-item">Thông tin tài khoản</li>
                        <li className="breadcrumb-item active">Lịch sử đơn hàng</li>
                    </ul>
                </nav>
                <div className="col-3">
                    <InfomationUser />
                </div>
                <div className="col-9">
                    <div className="user-history mb-2">
                        <div className="user-history-heading">
                            Lịch sử đơn hàng
                        </div>
                        <hr />
                        {data.length > 0 ?
                            <DataTable columns={columns} data={data} pagination customStyles={styleTitle} responsive="true" />
                            :
                            <h3>Chưa có đơn hàng nào, hãy
                                <Link to="/shop" className="text-decoration-none"> mua sắm </Link>
                                ngay nào</h3>
                        }
                    </div>

                    <div id="chitiet" className="user-history mb-2 mt-5">
                        <div className="user-history-heading">
                            Chi tiết đơn hàng
                        </div>
                        <hr />
                        {data_ct.length > 0 ?
                            <DataTable columns={columns_ct} data={data_ct} conditionalRowStyles={styleTitle} pagination responsive="true" />
                            :
                            <h3>Chưa có đơn hàng nào, hãy
                                <Link to="/shop" className="text-decoration-none"> mua sắm </Link>
                                ngay nào</h3>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
