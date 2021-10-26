import React from 'react'
import { Link } from 'react-router-dom'
import InfomationUser from '../components/InfomationUser/InfomationUser'
import DataTable from 'react-data-table-component';
import './User.css'

function Order() {
    const styleTitle = {
        fontSize: '1.7rem',
        fontWeight: 'bold'
    }
    const data = [
        {
            SoHDB: 1,
            NgayBan: '15-01-2000',
            Cost: 200000,
            Status: 1
        }
    ]
    const columns = [
        {
            selector: 'SoHDB',
            name: 'Mã HDB',
            sortable: true
        },
        {
            name: 'Ngày bán',
            selector: 'NgayBan',
            sortable: true
        },
        {
            name: 'Tổng tiền',
            selector: 'Cost',
            sortable: true,

        },
        {
            name: 'Trạng thái',
            selector: 'Status',
            sortable: true
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
                    <InfomationUser/>
                </div>
                <div className="col-9">
                    <div className="user-history mb-2">
                        <div className="user-history-heading">
                            Lịch sử đơn hàng
                        </div>
                        <hr />
                        {data.length > 0 ?
                            <DataTable columns={columns} data={data} pagination customStyles={styleTitle} responsive="true"/>
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
