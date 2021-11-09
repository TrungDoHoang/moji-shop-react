import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { createNhan_vien, deleteNhan_vien, getNhan_vien, getQuyen, quyenSelector, staffSelector, updateNhan_vien } from '../../../../app/reducers/adminSlice'

function Manager() {
    const staff = useSelector(staffSelector)
    const quyen = useSelector(quyenSelector)
    useEffect(() => {
        $("#main").scrollTop(0)
        document.title = 'Quản lý nhân viên'
    }, [staff])
    const [editMaNV, setEditMaNV] = useState('')
    const [editQuyen, setEditQuyen] = useState('')
    const [editTenNV, setEditTenNV] = useState('')
    const [editDiaChi, setEditDiaChi] = useState('')
    const [editDienThoai, setEditDienThoai] = useState('')
    const [editNgaySinh, setEditNgaySinh] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [tel, setTel] = useState('')
    const [date, setDate] = useState('')
    const dispatch = useDispatch()
    if (staff.length <= 0) {
        throw dispatch(getNhan_vien())
    }
    if (quyen.length <= 0) {
        throw dispatch(getQuyen())
    }

    const myRef = useRef(() => {
        $('#formUpdate :input').prop('disabled', true)
        $('#staffTable').dataTable()
    })
    const cancel = () => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        setEditMaNV('')
        setEditTenNV('')
        setEditDiaChi('')
        setEditDienThoai('')
        setEditNgaySinh('')
        $('#main').scrollTop(0)
    }

    const createNV = () => {
        $('#formAdd :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#add').offset().top
        }, 'slow')
    }

    const editKH = item => {
        $('#formUpdate :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#update').offset().top
        }, 'slow')
        setEditMaNV(item.MaNV)
        setEditTenNV(item.TenNV)
        setEditDiaChi(item.DiaChi)
        setEditDienThoai(item.DienThoai)
        setEditNgaySinh(item.NgaySinh)
        setEditQuyen(item.MaQuyen)
    }
    const updateSubmit = e => {
        e.preventDefault()
        const data = {
            "MaNV": editMaNV,
            "TenNV": editTenNV,
            "DiaChi": editDiaChi,
            "DienThoai": editDienThoai,
            "NgaySinh": editNgaySinh,
            "MaQuyen": editQuyen
        }
        dispatch(updateNhan_vien(data)).unwrap()
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

    const create = e => {
        e.preventDefault()
        let data = {
            "tendangnhap": username,
            "email": email,
            "TenNV": name,
            "DiaChi": address,
            "DienThoai": tel,
            "NgaySinh": date
        }
        dispatch(createNhan_vien(data)).unwrap()
            .then((registerResult) => {
                if (registerResult) {
                    if (registerResult.code === 200) {
                        Swal.fire('Thành công', '<h1>' + registerResult.success + '</h1>', 'success')
                            .then(() => { cancel() })
                    } else {
                        Swal.fire('Thất bại', '<h1>' + registerResult.error + '</h1>', "error")
                    }
                }
            })
    }

    const deleteNV = id => {
        const data = {
            'MaNV': id
        }
        Swal.fire({
            title: `<h1>Bạn có thật sự muốn xóa nhân viên ${id}?</h1>`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            customClass: {
                cancelButton: 'btn btn-danger size-2',
                confirmButton: 'btn btn-success size-2',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteNhan_vien(data)).unwrap()
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
                    <p>Danh sách các nhân viên
                        <span>
                            <button type="button" className="btn btn-pink ms-3" onClick={() => { createNV() }}>
                                Thêm nhân viên
                            </button>
                        </span>
                    </p>
                    <br />
                    <table id="staffTable">
                        <thead>
                            <tr>
                                <th width="4%">Mã</th>
                                <th width="18%">Tên nhân viên</th>
                                <th>Địa chỉ</th>
                                <th>Điện thoại</th>
                                <th width="12%">Ngày sinh</th>
                                <th width="12%">Tên đăng nhập</th>
                                <th>Email</th>
                                <th width="10%">Chức vụ</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staff.map(item => (
                                <tr key={item.MaNV}>
                                    <td>{item.MaNV}</td>
                                    <td>{item.TenNV}</td>
                                    <td>{item.DiaChi}</td>
                                    <td>{item.DienThoai}</td>
                                    <td>{item.NgaySinh}</td>
                                    <td>{item.tendangnhap}</td>
                                    <td>{item.email}</td>
                                    <td>{item.TenQuyen}</td>
                                    <td><button onClick={e => { editKH(item) }} className="btn btn-info"><i className="ace-icon fa fa-pencil-square-o bigger-120"></i></button>
                                        <button onClick={e => { deleteNV(item.MaNV) }} className="btn btn-danger delete-prompt ms-1"><i className="ace-icon fa fa-trash-o bigger-120"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="update" className="box-8 mt-5">
                <div className="content-box">
                    <p>Chỉnh sửa nhân viên</p>
                    <br />
                    <div>
                        <form id="formUpdate" onSubmit={updateSubmit}>
                            <div className="mt-3">
                                <label>Mã nhân viên</label>
                                <br />
                                <input type="text" className="form-control" value={editMaNV} onChange={e => { setEditMaNV(e.target.value) }} placeholder="Mã nhân viên" readOnly />
                            </div>
                            <div className="mt-3">
                                <label>Tên nhân viên</label>
                                <br />
                                <input type="text" className="form-control" value={editTenNV} onChange={e => { setEditTenNV(e.target.value) }} placeholder="Tên nhân viên" required />
                            </div>
                            <div className="mt-3">
                                <label>Địa chỉ nhân viên</label>
                                <br />
                                <input type="text" className="form-control" value={editDiaChi} onChange={e => { setEditDiaChi(e.target.value) }} placeholder="Địa chỉ nhân viên" required />
                            </div>
                            <div className="mt-3">
                                <label>Điện thoại nhân viên</label>
                                <br />
                                <input type="tel" className="form-control" value={editDienThoai} onChange={e => { setEditDienThoai(e.target.value) }} placeholder="Điện thoại nhân viên" required />
                            </div>
                            <div className="mt-3">
                                <label>Ngày sinh nhân viên</label>
                                <br />
                                <input type="date" className="form-control" value={editNgaySinh} onChange={e => { setEditNgaySinh(e.target.value) }} required />
                            </div>
                            <div className="mt-3">
                                <label>Chức vụ</label>
                                <br />
                                <select name="editQuyen" className="form-control" value={editQuyen} onChange={e => { setEditQuyen(e.target.value) }} required >
                                    <option value="" disabled>--Chọn chức vụ--</option>
                                    {quyen.map(item => (
                                        <option value={item.MaQuyen} key={item.MaQuyen}>{item.TenQuyen}</option>
                                    ))}
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
            <div id="add" className="box-8 mt-5" onSubmit={create}>
                <div className="content-box">
                    <p>Chỉnh sửa nhân viên</p>
                    <br />
                    <div>
                        <form id="formUpdate" onSubmit={updateSubmit}>
                            <div className="mt-3">
                                <label>Tài khoản</label>
                                <br />
                                <input type="text" id="username" className="main-input form-control" value={username} onChange={e => { setUsername(e.target.value) }} placeholder="Tên đăng nhập (*)" required />
                            </div>
                            <div className="mt-3">
                                <label>Tên nhân viên</label>
                                <br />
                                <input type="text" className="main-input form-control" value={name} onChange={e => { setName(e.target.value) }} placeholder="Họ tên (*)" required />
                            </div>
                            <div className="mt-3">
                                <label>Ngày sinh</label>
                                <br />
                                <input type="date" className="main-input form-control" value={date} onChange={e => { setDate(e.target.value) }} required />
                            </div>
                            <div className="mt-3">
                                <label>Điện thoại</label>
                                <br />
                                <input type="tel" className="main-input form-control" value={tel} onChange={e => { setTel(e.target.value) }} placeholder="Điện thoại (*)" required />
                            </div>
                            <div className="mt-3">
                                <label>Email</label>
                                <br />
                                <input type="email" className="main-input form-control" value={email} onChange={e => { setEmail(e.target.value) }} placeholder="Email (*)" required />
                            </div>
                            <div className="mt-3">
                                <label>Địa chỉ</label>
                                <br />
                                <input type="text" className="main-input form-control" value={address} onChange={e => { setAddress(e.target.value) }} placeholder="Địa chỉ chi tiết (*)" required />
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

export default Manager
