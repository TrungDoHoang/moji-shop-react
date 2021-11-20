import React, { useRef, useState } from 'react'
import $ from 'jquery'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { chu_deSelector, createSan_pham, getChu_de, getNha_cc, getNha_xb, nha_ccSelector, nha_xbSelector } from '../../../../app/reducers/adminSlice'
import { Link, useHistory } from 'react-router-dom'

function CreatePr() {
    document.title = "Thêm mới sản phẩm"
    window.scrollTo(0, 0)
    const [newTenSP, setNewTenSP] = useState('')
    const [newMaCD, setNewMaCD] = useState('')
    const [newMaNXB, setNewMaNXB] = useState('')
    const [newMaNCC, setNewMaNCC] = useState('')
    const [newDG, setNewDG] = useState('')
    const [newSL, setNewSL] = useState(1)
    const [newAnh, setNewAnh] = useState('')
    const [newMoTa, setNewMoTa] = useState('')
    const [newIsSach, setNewIsSach] = useState(0)
    const chu_de = useSelector(chu_deSelector)
    const nhaxb = useSelector(nha_xbSelector)
    const nha_cc = useSelector(nha_ccSelector)
    const dispatch = useDispatch()
    const location = useHistory()
    if (chu_de.length <= 0) {
        throw dispatch(getChu_de())
    }
    if (nhaxb.length <= 0) {
        throw dispatch(getNha_xb())
    }
    if (nha_cc.length <= 0) {
        throw dispatch(getNha_cc())
    }

    const myRef = useRef(() => {
        $("#upFileNew").click(function () {
            $("#fileNew").trigger("click");
        });
    })
    const addSubmit = e => {
        e.preventDefault()
        const data = {
            "TenSanPham": newTenSP,
            "MaChuDe": newMaCD,
            "MaNXB": newMaNXB,
            "DonGiaBan": Number.parseInt(newDG),
            "SoLuong": Number.parseInt(newSL),
            "MoTa": newMoTa,
            "isSach": newIsSach,
            "MaNCC": newMaNCC,
            "Anh": newAnh,
        }
        dispatch(createSan_pham(data)).unwrap()
            .then(res => {
                if (res.code) {
                    Swal.fire('Save', '<h1>' + res.message + '</h1>', 'success')
                    location.replace('/admin/products')
                }
                else {
                    Swal.fire('Error!', '<h1>' + res.message + '</h1>', 'error')
                }
            })
    }
    return (
        <div id="add" className="box-8 mt-5" ref={myRef.current}>
            <div className="content-box">
                <p>Thêm sản phẩm <span>
                    <button type="button" className="btn btn-pink" onClick={() => location.goBack()}>
                        Trở về
                    </button></span></p>
                <br />
                <div>
                    <form id="formAdd" onSubmit={addSubmit}>
                        <div className="mt-3">
                            <label>Tên sản phẩm</label>
                            <br />
                            <input type="text" className="form-control" value={newTenSP} onChange={e => { setNewTenSP(e.target.value) }} placeholder="Tên sản phẩm" required />
                        </div>
                        <div className="mt-3">
                            <label>Chủ đề</label>
                            <br />
                            <select className="form-control" value={newMaCD} onChange={e => { setNewMaCD(e.target.value) }} required >
                                <option value="" disabled>--Chọn chủ đề--</option>
                                {chu_de.map(item => (
                                    <option value={item.MaChuDe} key={item.MaChuDe}>{item.TenChuDe}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3">
                            <label>Nhà xuất bản</label>
                            <br />
                            <select className="form-control" value={newMaNXB} onChange={e => { setNewMaNXB(e.target.value) }} required >
                                <option value="" disabled>--Chọn Nhà xuất bản--</option>
                                {nhaxb.map(item => (
                                    <option value={item.MaNXB} key={item.MaNXB}>{item.TenNXB}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3">
                            <label>Nhà cung cấp</label>
                            <br />
                            <select className="form-control" value={newMaNCC} onChange={e => { setNewMaNCC(e.target.value) }} required >
                                <option value="" disabled>--Chọn nhà cung cấp--</option>
                                {nha_cc.map(item => (
                                    <option value={item.MaNCC} key={item.MaNCC}>{item.TenNCC}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3">
                            <label>Thể loại sản phẩm</label>
                            <br />
                            <select className="form-control" value={newIsSach} onChange={e => { setNewIsSach(e.target.value) }} required >
                                <option value="" disabled>--Chọn loại sản phẩm--</option>
                                <option value="0">Đồ dùng học tập</option>
                                <option value="1">Sách vở</option>
                            </select>
                        </div>
                        <div className="mt-3">
                            <label>Đơn giá</label>
                            <br />
                            <input type="number" min="1000" className="form-control" value={newDG} onChange={e => { setNewDG(e.target.value) }} placeholder="Giá sản phẩm" required />
                        </div>
                        <div className="mt-3">
                            <label>Số lượng</label>
                            <br />
                            <input type="number" min="10" className="form-control" value={newSL} onChange={e => { setNewSL(e.target.value) }} placeholder="Số lượng sản phẩm" required />
                        </div>
                        <div className="mt-3">
                            <label>Ảnh</label>
                            <br />
                            <input type="file" hidden id="fileNew" onChange={e => {
                                $('#filenameNew').val(e.target.value.split('\\')[e.target.value.split('\\').length - 1])
                                setNewAnh(e.target.value.split('\\')[e.target.value.split('\\').length - 1])
                            }} />
                            <span className="d-flex">
                                <input type="text" id="filenameNew" className="form-control" value={newAnh} onChange={e => { setNewAnh(e.target.value) }} placeholder="Ảnh sản phẩm" required />
                                <input id="upFileNew" type="button" className="btn btn-pink" value="..." />
                            </span>
                        </div>
                        <div className="mt-3">
                            <label>Mô tả</label>
                            <br />
                            <textarea rows="4" className="form-control" value={newMoTa} onChange={e => { setNewMoTa(e.target.value) }} placeholder="Mô tả sản phẩm" />
                        </div>
                        <button type="submit" className="btn btn-pink mt-5">Thêm mới</button>
                        <Link id="cance" className="btn btn-pink mt-5 ms-2" to="/admin/products">hủy bỏ</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePr
