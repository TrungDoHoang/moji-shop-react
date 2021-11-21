import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../../../../app/reducers/userSlice'
import { createTin, deleteTin, getNhan_vien, getTin, newsSelector, staffSelector, updateTin } from '../../../../app/reducers/adminSlice'
import { useHistory } from 'react-router'

function News() {
    const news = useSelector(newsSelector)
    const nhan_vien = useSelector(staffSelector)
    const user = useSelector(userSelector)
    const location = useHistory()
    useEffect(() => {
        $("#main").scrollTop(0)
        document.title = 'Tin tức'
    }, [news])
    useEffect(() => {
        dispatch(getTin())
        dispatch(getNhan_vien())
    }, [location.location])
    const [editMaTinTuc, setEditMaTinTuc] = useState('')
    const [editTieuDe, setEditTieuDe] = useState('')
    const [editMoTa, setEditMoTa] = useState('')
    const [editNoiDung, setEditNoiDung] = useState('')
    const [editAnh, setEditAnh] = useState('')
    const [editNgayTao, setEditNgayTao] = useState('')
    const [editMaLoaiTin, setEditMaLoaiTin] = useState('')
    const [editNguoiTao, setEditNguoiTao] = useState('')

    const [newTieuDe, setNewTieuDe] = useState('')
    const [newMoTa, setNewMoTa] = useState('')
    const [newNoiDung, setNewNoiDung] = useState('')
    const [newAnh, setNewAnh] = useState('')
    const [newMaLoaiTin, setNewMaLoaiTin] = useState('')
    const [newNguoiTao, setNewNguoiTao] = useState('')
    const dispatch = useDispatch()
    if (news.length <= 0) {
        throw dispatch(getTin())
    }
    if (nhan_vien.length <= 0) {
        throw dispatch(getNhan_vien())
    }

    const myRef = useRef(() => {
        $('#formUpdate :input').prop('disabled', true)
        $('#newsTable').dataTable()
        $("#upFileEdit").click(function () {
            $("#fileEdit").trigger("click");
        });
        $("#upFileNew").click(function () {
            $("#fileNew").trigger("click");
        });
    })
    const cancel = () => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        $('#formAdd :input, #formUpdate select').prop('disabled', true)
        setEditMaTinTuc('')
        setEditTieuDe('')
        setEditAnh('')
        setEditMaLoaiTin('')
        setEditMoTa('')
        setEditNgayTao('')
        setEditNoiDung('')
        setEditNguoiTao('')

        setNewTieuDe('')
        setNewAnh('')
        setNewMaLoaiTin('')
        setNewMoTa('')
        setNewNoiDung('')
        setNewNguoiTao('')
    }
    const editNews = item => {
        $('#formUpdate :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#update').offset().top
        }, 'slow')
        setEditMaTinTuc(item.MaTinTuc)
        setEditTieuDe(item.TieuDe)
        setEditAnh(item.Anh)
        setEditMaLoaiTin(item.MaLoaiTin)
        setEditMoTa(item.MoTa)
        setEditNgayTao(item.NgayTao.replace(' ', 'T'))
        setEditNoiDung(item.NoiDung)
        setEditNguoiTao(item.NguoiTao)
    }
    const addSubmit = e => {
        e.preventDefault()
        const data = {
            "TieuDe": newTieuDe,
            "Anh": newAnh,
            "MaLoaiTin": newMaLoaiTin,
            "MoTa": newMoTa,
            "NoiDung": newNoiDung,
            "NguoiTao": newNguoiTao,
        }
        dispatch(createTin(data)).unwrap()
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
    const updateSubmit = e => {
        e.preventDefault()
        const data = {
            "MaTinTuc": editMaTinTuc,
            "TieuDe": editTieuDe,
            "Anh": editAnh,
            "MaLoaiTin": editMaLoaiTin,
            "MoTa": editMoTa,
            "NgayTao": editNgayTao.replace('T', ' '),
            "NoiDung": editNoiDung,
            "NguoiTao": editNguoiTao,
        }
        dispatch(updateTin(data)).unwrap()
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

    const deleteNews = item => {
        const data = {
            'MaTinTuc': item.MaTinTuc
        }
        Swal.fire({
            title: `<h1>Bạn có thật sự muốn xóa tin tức ${item.TieuDe}?</h1>`,
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
                dispatch(deleteTin(data)).unwrap()
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
    const createNews = () => {
        $('#formAdd :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#add').offset().top
        }, 'slow')
        setNewNguoiTao(user.MaNV)
    }
    return (
        <div className="col-div-8" ref={myRef.current}>
            <div className="box-8">
                <div className="content-box">
                    <p>Danh sách các tin tức
                        <span>
                            <button type="button" className="btn btn-pink ms-3" onClick={() => { createNews() }}>
                                Thêm tin tức
                            </button>
                        </span>
                    </p>
                    <br />
                    <table id="newsTable">
                        <thead>
                            <tr>
                                <th width="5%">Mã</th>
                                <th width="20%" height="10px">Tiêu đề</th>
                                <th>Ngày tạo</th>
                                <th width="12%">Tác giả</th>
                                <th>Ảnh</th>
                                <th>Loại tin</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map(item => (
                                <tr key={item.MaTinTuc}>
                                    <td>{item.MaTinTuc}</td>
                                    <td>{item.TieuDe}</td>
                                    <td>{item.NgayTao}</td>
                                    <td>{item.TenNV}</td>
                                    <td>{item.Anh}</td>
                                    <td>{item.TenLoaiTin}</td>
                                    <td><button onClick={e => { editNews(item) }} className="btn btn-info"><i className="ace-icon fa fa-pencil-square-o bigger-120"></i></button>
                                        <button onClick={e => { deleteNews(item) }} className="btn btn-danger delete-prompt ms-1"><i className="ace-icon fa fa-trash-o bigger-120"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="update" className="box-8 mt-5">
                <div className="content-box">
                    <p>Chỉnh sửa tin tức</p>
                    <br />
                    <div>
                        <form id="formUpdate" onSubmit={updateSubmit}>
                            <div className="mt-3">
                                <label>Mã tin tức</label>
                                <br />
                                <input type="text" className="form-control" value={editMaTinTuc} onChange={e => { setEditMaTinTuc(e.target.value) }} placeholder="Mã tin tức" readOnly />
                            </div>
                            <div className="mt-3">
                                <label>Tiêu đề tin tức</label>
                                <br />
                                <textarea rows="2" className="form-control" value={editTieuDe} onChange={e => { setEditTieuDe(e.target.value) }} placeholder="Tiêu đề tin" required />
                            </div>
                            <div className="mt-3">
                                <label>Mô tả tin tức</label>
                                <br />
                                <textarea rows="2" className="form-control" value={editMoTa} onChange={e => { setEditMoTa(e.target.value) }} placeholder="Mô tả tin" required />
                            </div>
                            <div className="mt-3">
                                <label>Nội dung tin tức</label>
                                <br />
                                <textarea rows="5" className="form-control" value={editNoiDung} onChange={e => { setEditNoiDung(e.target.value) }} placeholder="Tiêu đề tin" required />
                            </div>
                            <div className="mt-3">
                                <label>Ngày tạo tin </label>
                                <br />
                                <input type="datetime-local" className="form-control" value={editNgayTao} onChange={e => { setEditNgayTao(e.target.value) }} required />
                            </div>
                            <div className="mt-3">
                                <label>Ảnh</label>
                                <br />
                                <input type="file" hidden id="fileEdit" onChange={e => {
                                    $('#filenameEdit').val(e.target.value.split('\\')[e.target.value.split('\\').length - 1])
                                    setEditAnh(e.target.value.split('\\')[e.target.value.split('\\').length - 1])
                                }} />
                                <span className="d-flex">
                                    <input type="text" id="filenameEdit" className="form-control" value={editAnh} onChange={e => { setEditAnh(e.target.value) }} placeholder="Ảnh tin tức" required />
                                    <input id="upFileEdit" type="button" className="btn btn-pink" value="..." />
                                </span>
                            </div>
                            <div className="mt-3">
                                <label>Loại tin tức</label>
                                <br />
                                <select name="editSach" className="form-control" value={editMaLoaiTin} onChange={e => { setEditMaLoaiTin(e.target.value) }} required >
                                    <option value="" disabled>--Chọn loại tin tức--</option>
                                    <option value="1">Tin khuyến mãi</option>
                                    <option value="2">Tin tuyển dụng</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Tác giả</label>
                                <br />
                                <select className="form-control" value={editNguoiTao} onChange={e => { setEditNguoiTao(e.target.value) }} required >
                                    <option value="" disabled>--Chọn người tạo tin--</option>
                                    {nhan_vien.map(item => (
                                        <option value={item.MaNV} key={item.MaNV}>{item.TenNV}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-pink mt-5">Lưu lại</button>
                            <button type="reset" onClick={e => {
                                e.preventDefault()
                                cancel()
                                $('#main').scrollTop(0)
                            }} className="btn ms-2 btn-pink mt-5">Hủy bỏ</button>
                        </form>
                    </div>
                </div>
            </div>
            <div id="add" className="box-8 mt-5">
                <div className="content-box">
                    <p>Thêm tin tức</p>
                    <br />
                    <div>
                        <form id="formAdd" onSubmit={addSubmit}>
                            <div className="mt-3">
                                <label>Tiêu đề tin tức</label>
                                <br />
                                <textarea rows="2" className="form-control" value={newTieuDe} onChange={e => { setNewTieuDe(e.target.value) }} placeholder="Tiêu đề tin" required />
                            </div>
                            <div className="mt-3">
                                <label>Mô tả tin tức</label>
                                <br />
                                <textarea rows="2" className="form-control" value={newMoTa} onChange={e => { setNewMoTa(e.target.value) }} placeholder="Mô tả tin" required />
                            </div>
                            <div className="mt-3">
                                <label>Nội dung tin tức</label>
                                <br />
                                <textarea rows="5" className="form-control" value={newNoiDung} onChange={e => { setNewNoiDung(e.target.value) }} placeholder="Tiêu đề tin" required />
                            </div>
                            <div className="mt-3">
                                <label>Ảnh</label>
                                <br />
                                <input type="file" hidden id="fileNew" onChange={e => {
                                    $('#filenameNew').val(e.target.value.split('\\')[e.target.value.split('\\').length - 1])
                                    setNewAnh(e.target.value.split('\\')[e.target.value.split('\\').length - 1])
                                }} />
                                <span className="d-flex">
                                    <input type="text" id="filenameNew" className="form-control" value={newAnh} onChange={e => { setNewAnh(e.target.value) }} placeholder="Ảnh tin tức" required />
                                    <input id="upFileNew" type="button" className="btn btn-pink" value="..." />
                                </span>
                            </div>
                            <div className="mt-3">
                                <label>Loại tin tức</label>
                                <br />
                                <select name="editSach" className="form-control" value={newMaLoaiTin} onChange={e => { setNewMaLoaiTin(e.target.value) }} required >
                                    <option value="" disabled>--Chọn loại tin tức--</option>
                                    <option value="1">Tin khuyến mãi</option>
                                    <option value="2">Tin tuyển dụng</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-pink mt-5">Lưu lại</button>
                            <button type="reset" onClick={e => {
                                e.preventDefault()
                                cancel()
                                $('#main').scrollTop(0)
                            }} className="btn ms-2 btn-pink mt-5">Hủy bỏ</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default News
