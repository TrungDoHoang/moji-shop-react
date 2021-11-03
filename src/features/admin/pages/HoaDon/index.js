import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHoa_don, getHoa_don, getKhach_hang, hoa_donSelector, khach_hangSelector, updateHoa_don } from '../../../../app/reducers/adminSlice'
import { Link } from 'react-router-dom'

function HoaDon() {
    const hoa_don = useSelector(hoa_donSelector)
    const khach_hang = useSelector(khach_hangSelector)
    useEffect(()=> {
        $("#main").scrollTop(0)
        document.title = 'Hóa đơn'
    },[hoa_don])
    const [editMaKH, setEditMaKH] = useState('')
    const [editSoHDB, setEditSoHDB] = useState('')
    const [editNgayBan, setEditNgayBan] = useState('')
    const [editStatus, setEditStatus] = useState('')
    const [editTotal, setEditTotal] = useState('')
    const dispatch = useDispatch()
    if (khach_hang.length <= 0) {
        throw dispatch(getKhach_hang())
    }
    if (hoa_don.length <= 0) {
        throw dispatch(getHoa_don())
    }

    const myRef = useRef(() => {
        $('#formUpdate :input').prop('disabled', true)
        $('#hoa_donTable').dataTable()
    })
    const cancel = () => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        setEditMaKH('')
        setEditSoHDB('')
        setEditNgayBan('')
        setEditStatus('')
        setEditTotal('')
        $('#main').scrollTop(0)
    }
    const editHD = item => {
        $('#formUpdate :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#update').offset().top
        }, 'slow')
        setEditMaKH(item.MaKH)
        setEditSoHDB(item.SoHDB)
        setEditNgayBan(item.NgayBan.replace(' ', 'T'))
        setEditStatus(item.Status)
        setEditTotal(item.Total)
    }
    const updateSubmit = e => {
        e.preventDefault()
        const data = {
            "MaKH": editMaKH,
            "SoHDB": editSoHDB,
            "NgayBan": editNgayBan.replace('T', ' '),
            "Status": editStatus,
            "Total": editTotal,
        }
        dispatch(updateHoa_don(data)).unwrap()
            .then(res => {
                if (res.code) {
                    alert(res.message)
                    cancel()
                }
                else {
                    alert(res.message)
                }
            })
            
        }

    const deleteHD = id => {
        const data = {
            'SoHDB' : id
        }
        dispatch(deleteHoa_don(data)).unwrap()
            .then(res => {
                if (res.code) {
                    alert(res.message)
                    window.location.reload()
                }
                else {
                    alert(res.message)
                }
            })
    }
    return (
        <div className="col-div-8" ref={myRef.current}>
            <div className="box-8">
                <div className="content-box">
                    <p>Danh sách các hóa đơn </p>
                    <br />
                    <table id="hoa_donTable">
                        <thead>
                            <tr>
                                <th width="5%">SốHĐB</th>
                                <th width="20%">Khách hàng</th>
                                <th>Ngày bán</th>
                                <th>Trạng thái</th>
                                <th>Tổng tiền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hoa_don.map(item => (
                                <tr key={item.SoHDB}>
                                    <td>{item.SoHDB}</td>
                                    <td>{item.TenKH}</td>
                                    <td>{item.NgayBan}</td>
                                    <td>{item.Status === '0' ? 'Đang giao' : 'Đã giao' }</td>
                                    <td>{Number.parseInt(item.Total).toLocaleString()}</td>
                                    <td><button onClick={e => { editHD(item) }} className="btn btn-info"><i className="ace-icon fa fa-pencil-square-o bigger-120"></i></button>
                                        <button onClick={e => { deleteHD(item.MaKH) }} className="btn btn-danger delete-prompt ms-1"><i className="ace-icon fa fa-trash-o bigger-120"></i></button>
                                        <Link to={"/admin/bill/show?sohdb="+item.SoHDB} className="btn btn-info text-decoration-none ms-1"><i className="ace-icon fa fa-eye bigger-120"></i></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="update" className="box-8 mt-5">
                <div className="content-box">
                    <p>Chỉnh sửa khách hàng</p>
                    <br />
                    <div>
                        <form id="formUpdate" onSubmit={updateSubmit}>
                            <div className="mt-3">
                                <label>Mã số hóa đơn</label>
                                <br />
                                <input type="text" className="form-control" value={editSoHDB} onChange={e => { setEditSoHDB(e.target.value) }} placeholder="Số hóa đơn" readOnly />
                            </div>
                            <div className="mt-3">
                                <label>Tổng tiền</label>
                                <br />
                                <input type="text" className="form-control" value={editTotal} onChange={e => { setEditTotal(e.target.value) }} placeholder="Tổng tiền" readOnly />
                            </div>
                            <div className="mt-3">
                                <select className="form-control" value={editMaKH} onChange={e => { setEditMaKH(e.target.value) }} required >
                                    <option value="" disabled>--Chọn khách hàng--</option>
                                    {khach_hang.map(item => (
                                        <option value={item.MaKH} key={item.MaKH}>{item.TenKH}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Ngày bán</label>
                                <br />
                                <input type="datetime-local" className="form-control" value={editNgayBan} onChange={e => { setEditNgayBan(e.target.value) }} required />
                            </div>
                            <div className="mt-3">
                                <select className="form-control" value={editStatus} onChange={e => { setEditStatus(e.target.value) }} required >
                                    <option value="" disabled>--Lựa chọn trạng thái đơn hàng--</option>
                                    <option value="0">Đang giao</option>
                                    <option value="1">Đã giao</option>
                                </select>
                            </div>
                            
                            <button type="submit" className="btn btn-pink mt-5">Lưu lại</button>
                            <button type="reset" onClick={e => {
                                e.preventDefault()
                                cancel()
                            }} className="btn ms-2 btn-pink mt-5">Hủy bỏ</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HoaDon
