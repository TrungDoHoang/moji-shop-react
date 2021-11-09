import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import $ from 'jquery'
import { deleteKhach_hang, getKhach_hang, khach_hangSelector, updateKhach_hang } from '../../../../app/reducers/adminSlice'

export default function Customer() {
    const khach_hang = useSelector(khach_hangSelector)
    useEffect(() => {
        $("#main").scrollTop(0)
        document.title = 'Khách hàng'
    }, [khach_hang])
    const [editMaKH, setEditMaKH] = useState('')
    const [editTenKH, setEditTenKH] = useState('')
    const [editDiaChi, setEditDiaChi] = useState('')
    const [editDienThoai, setEditDienThoai] = useState('')
    const [editNgaySinh, setEditNgaySinh] = useState('')
    const dispatch = useDispatch()
    if (khach_hang.length <= 0) {
        throw dispatch(getKhach_hang())
    }

    const myRef = useRef(() => {
        $('#formUpdate :input').prop('disabled', true)
        $('#khach_hangTable').dataTable()
    })
    const cancel = () => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        setEditMaKH('')
        setEditTenKH('')
        setEditDiaChi('')
        setEditDienThoai('')
        setEditNgaySinh('')
        $('#main').scrollTop(0)
    }
    const editKH = item => {
        $('#formUpdate :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#update').offset().top
        }, 'slow')
        setEditMaKH(item.MaKH)
        setEditTenKH(item.TenKH)
        setEditDiaChi(item.DiaChi)
        setEditDienThoai(item.DienThoai)
        setEditNgaySinh(item.NgaySinh)
    }
    const updateSubmit = e => {
        e.preventDefault()
        const data = {
            "MaKH": editMaKH,
            "TenKH": editTenKH,
            "DiaChi": editDiaChi,
            "DienThoai": editDienThoai,
            "NgaySinh": editNgaySinh,
        }
        dispatch(updateKhach_hang(data)).unwrap()
            .then(res => {
                if (res.code) {
                    Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
                    cancel()
                }
                else {
                    Swal.fire('Error!', '<h1>' + res.message + '</h1>', 'error')
                }
            })

    }

    const deleteKH = id => {
        const data = {
            'MaKH': id
        }
        Swal.fire({
            title: `<h1>Bạn có thật sự muốn xóa khách hàng ${id}?</h1>`,
            showDenyButton: true,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            customClass: {

                cancelButton: 'btn btn-danger size-2',
                confirmButton: 'btn btn-success size-2',
                denyButton: 'btn btn-default size-2',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteKhach_hang(data)).unwrap()
                    .then(res => {
                        if (res.code) {
                            Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
                        }
                        else {
                            Swal.fire('Error!', '<h1>' + res.message + '</h1>', 'error')
                        }
                    })
            } else {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }
    return (
        <div className="col-div-8" ref={myRef.current}>
            <div className="box-8">
                <div className="content-box">
                    <p>Danh sách các khách hàng </p>
                    <br />
                    <table id="khach_hangTable">
                        <thead>
                            <tr>
                                <th width="5%">Mã</th>
                                <th width="20%">Tên khách hàng</th>
                                <th>Địa chỉ</th>
                                <th>Điện thoại</th>
                                <th>Ngày sinh</th>
                                <th width="12%">Tên đăng nhập</th>
                                <th>Email</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {khach_hang.map(item => (
                                <tr key={item.MaKH}>
                                    <td>{item.MaKH}</td>
                                    <td>{item.TenKH}</td>
                                    <td>{item.DiaChi}</td>
                                    <td>{item.DienThoai}</td>
                                    <td>{item.NgaySinh}</td>
                                    <td>{item.tendangnhap}</td>
                                    <td>{item.email}</td>
                                    <td><button onClick={e => { editKH(item) }} className="btn btn-info"><i className="ace-icon fa fa-pencil-square-o bigger-120"></i></button>
                                        <button onClick={e => { deleteKH(item.MaKH) }} className="btn btn-danger delete-prompt ms-1"><i className="ace-icon fa fa-trash-o bigger-120"></i></button>
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
                                <label>Mã khách hàng</label>
                                <br />
                                <input type="text" className="form-control" value={editMaKH} onChange={e => { setEditMaKH(e.target.value) }} placeholder="Mã khách hàng" readOnly />
                            </div>
                            <div className="mt-3">
                                <label>Tên khách hàng</label>
                                <br />
                                <input type="text" className="form-control" value={editTenKH} onChange={e => { setEditTenKH(e.target.value) }} placeholder="Tên khách hàng" required />
                            </div>
                            <div className="mt-3">
                                <label>Địa chỉ khách hàng</label>
                                <br />
                                <input type="text" className="form-control" value={editDiaChi} onChange={e => { setEditDiaChi(e.target.value) }} placeholder="Địa chỉ khách hàng" required />
                            </div>
                            <div className="mt-3">
                                <label>Điện thoại khách hàng</label>
                                <br />
                                <input type="tel" className="form-control" value={editDienThoai} onChange={e => { setEditDienThoai(e.target.value) }} placeholder="Điện thoại khách hàng" required />
                            </div>
                            <div className="mt-3">
                                <label>Ngày sinh khách hàng</label>
                                <br />
                                <input type="date" className="form-control" value={editNgaySinh} onChange={e => { setEditNgaySinh(e.target.value) }} required />
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
