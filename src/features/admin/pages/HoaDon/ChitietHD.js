import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import $ from 'jquery'
import { createCTHoa_don, cthoa_donSelector, deleteCTHoa_don, getCTHoa_don, getSan_pham, san_phamSelector, updateCTHoa_don } from '../../../../app/reducers/adminSlice'
import { useQueryParam, NumberParam } from 'use-query-params'
import { useHistory } from 'react-router'

export default function ChitietHD() {
    const cthoa_don = useSelector(cthoa_donSelector)
    const san_pham = useSelector(san_phamSelector)
    const [sohdb, setSohdb] = useQueryParam('sohdb', NumberParam)
    const location = useHistory()
    useEffect(() => {
        $("#main").scrollTop(0)
        dispatch(getCTHoa_don(sohdb))
        document.title = 'Chi tiết hóa đơn ' + sohdb
    }, [location.location])
    const [editMaSanPham, setEditMaSanPham] = useState('')
    const [oldMaSanPham, setOldMaSanPham] = useState('')
    const [editSLBan, setEditSLBan] = useState('')
    // const [editDonGiaBan, setEditDonGiaBan] = useState('')
    const [soLuong, setSoLuong] = useState('')
    // const [newDonGiaBan, setNewDonGiaBan] = useState('')
    const [newMaSanPham, setNewMaSanPham] = useState('')
    const [newSLBan, setNewSLBan] = useState('')
    const dispatch = useDispatch()
    if (cthoa_don.length <= 0) {
        throw dispatch(getCTHoa_don(sohdb))
    }
    if (san_pham.length <= 0) {
        throw dispatch(getSan_pham())
    }

    const returnSL = id => {
        let SL = san_pham.find(item => item.id === id).SoLuong
        setSoLuong(SL)
    }

    const myRef = useRef(() => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        $('#cthoa_donTable').dataTable()
    })
    const cancel = () => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        setEditMaSanPham('')
        // setEditDonGiaBan('')
        setEditSLBan('')
        setNewMaSanPham('')
        // setNewDonGiaBan('')
        setNewSLBan('')
        $('#main').scrollTop(0)
    }
    const editCT = item => {
        $('#formUpdate :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#update').offset().top
        }, 'slow')
        setEditMaSanPham(item.MaSanPham)
        setOldMaSanPham(item.MaSanPham)
        // setEditDonGiaBan(item.DonGiaBan)
        setEditSLBan(Number.parseInt(item.SLBan))
        setSoLuong(item.SoLuong)
    }
    const quantityRequired = e => {
        let val = Number.parseInt($(e.target).val())

        if (val < 1) {
            Swal.fire('Cảnh báo', '<h1>Số lượng mua tối thiểu là 1</h1>', 'warning')
            $(e.target).val(1)
        }
        if (val > soLuong) {
            Swal.fire('Cảnh báo', '<h1>Số lượng mua tối đa là ' + soLuong + '</h1>', 'warning')
            $(e.target).val(soLuong)
        }
    }

    const createCT = () => {
        $('#formAdd :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#add').offset().top
        }, 'slow')
    }
    const updateSubmit = e => {
        e.preventDefault()
        const data = {
            "SoHDB": sohdb,
            "MaSanPham": editMaSanPham,
            "oldMa": oldMaSanPham,
            "SLBan": editSLBan,
        }
        dispatch(updateCTHoa_don(data)).unwrap()
            .then(res => {
                if (res.code) {
                    Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
                    cancel()
                }
                else {
                    Swal.fire('Error', res.message, 'error')
                }
            })

    }
    const addSubmit = e => {
        e.preventDefault()
        const data = {
            "SoHDB": sohdb,
            "MaSanPham": newMaSanPham,
            "SLBan": newSLBan,
        }
        dispatch(createCTHoa_don(data)).unwrap()
            .then(res => {
                if (res.code) {
                    Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
                        .then(res => {
                            if (res.isConfirmed) {
                                cancel()
                            }
                        })
                }
                else {
                    Swal.fire('Error', res.message, 'error')
                }
            })
    }

    const deleteCT = id => {
        const data = {
            'MaSanPham': id.MaSanPham,
            'SoHDB': sohdb
        }
        Swal.fire({
            title: `<h1>Bạn có thật sự muốn xóa ${id.TenSanPham} khỏi hóa đơn ${sohdb}?</h1>`,
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
                return dispatch(deleteCTHoa_don(data)).unwrap()
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
                return Promise.reject()
            } else return Promise.reject()
        }).then(res => {
            if (res.code) {
                Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
                    .then(res => {
                        if (res.isConfirmed) {
                            window.location.reload()
                        }
                    })
            }
            else {
                Swal.fire('Error!', '<h1>' + res.message + '</h1>', 'error')
            }
        })
    }
    return (
        <div className="col-div-8" ref={myRef.current}>
            <div className="box-8">
                <div className="content-box">
                    <p>Danh sách các khách hàng <span>
                        <button type="button" className="btn btn-pink" onClick={() => location.goBack()}>
                            Trở về
                        </button>
                        <button type="button" className="btn btn-pink ms-3" onClick={() => { createCT() }}>
                            Thêm sản phẩm
                        </button>
                    </span></p>

                    <br />
                    <table id="cthoa_donTable">
                        <thead>
                            <tr>
                                <th width="5%">Mã</th>
                                <th width="35%">Tên sản phẩm</th>
                                <th>Đơn giá bán</th>
                                <th>Số lượng bán</th>
                                <th>Số lượng còn</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cthoa_don.map(item => (
                                <tr key={item.MaSanPham}>
                                    <td>{item.SoHDB}</td>
                                    <td>{item.TenSanPham}</td>
                                    <td>{item.DonGiaBan}</td>
                                    <td>{item.SLBan}</td>
                                    <td>{item.SoLuong}</td>
                                    <td><button onClick={e => { editCT(item) }} className="btn btn-info"><i className="ace-icon fa fa-pencil-square-o bigger-120"></i></button>
                                        <button onClick={e => { deleteCT(item) }} className="btn btn-danger delete-prompt ms-1"><i className="ace-icon fa fa-trash-o bigger-120"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="update" className="box-8 mt-5">
                <div className="content-box">
                    <p>Chỉnh sửa chi tiết hóa đơn</p>
                    <br />
                    <div>
                        <form id="formUpdate" onSubmit={updateSubmit}>
                            <div className="mt-3">
                                <label>Số hóa đơn</label>
                                <br />
                                <input type="text" className="form-control" value={sohdb} placeholder="Số hóa đơn" readOnly />
                            </div>
                            <div className="mt-3">
                                <label>Sản phẩm</label>
                                <br />
                                <select name="editSanPham" className="form-control" value={editMaSanPham} onChange={e => { setEditMaSanPham(e.target.value); returnSL(e.target.value) }} required >
                                    <option value="" disabled>--Chọn sản phẩm--</option>
                                    {san_pham.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Đơn giá bán</label>
                                <br />
                                <select name="editSanPham" className="form-control" readOnly value={editMaSanPham} onChange={e => { setEditMaSanPham(e.target.value); setEditSLBan('') }} required >
                                    <option value="" disabled></option>
                                    {san_pham.map(item => (
                                        <option value={item.id} key={item.id} disabled>{item.cost}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Số lượng bán</label>
                                <br />
                                <input type="number" min={1} max={soLuong} className="form-control" onBlur={quantityRequired} value={editSLBan} onChange={e => { setEditSLBan(e.target.value) }} placeholder="Số lượng sản phẩm" required />
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
            <div id="add" className="box-8 mt-5">
                <div className="content-box">
                    <p>Thêm sản phẩm vào chi tiết hóa đơn</p>
                    <br />
                    <div>
                        <form id="formAdd" onSubmit={addSubmit}>
                            <div className="mt-3">
                                <label>Số hóa đơn</label>
                                <br />
                                <input type="text" className="form-control" value={sohdb} placeholder="Số hóa đơn" readOnly />
                            </div>
                            <div className="mt-3">
                                <label>Sản phẩm</label>
                                <br />
                                <select name="editSanPham" className="form-control" value={newMaSanPham} onChange={e => { setNewMaSanPham(e.target.value); returnSL(e.target.value); setNewSLBan('') }} required >
                                    <option value="" disabled>--Chọn sản phẩm--</option>
                                    {san_pham.map(item => (
                                        <option value={item.id} mydata={item.SoLuong} key={item.id}>{item.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Đơn giá bán</label>
                                <br />
                                <select name="editSanPham" className="form-control" readOnly value={newMaSanPham} onChange={e => { setNewMaSanPham(e.target.value) }} required >
                                    <option value="" disabled></option>
                                    {san_pham.map(item => (
                                        <option value={item.id} key={item.id} disabled>{item.cost}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Số lượng bán</label>
                                <br />
                                <input type="number" min={1} max={soLuong} className="form-control" onBlur={quantityRequired} value={newSLBan} onChange={e => { setNewSLBan(e.target.value) }} placeholder="Số lượng sản phẩm" required />
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
