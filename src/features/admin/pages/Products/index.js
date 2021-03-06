import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'datatables.net'
import Swal from 'sweetalert2'
import $ from 'jquery'
import { chu_deSelector, deleteSan_pham, getChu_de, getNha_cc, getNha_xb, getSan_pham, nha_ccSelector, nha_xbSelector, san_phamSelector, updateSan_pham } from '../../../../app/reducers/adminSlice'
import { Link } from 'react-router-dom'

function Products() {
    const products = useSelector(san_phamSelector)
    const chu_de = useSelector(chu_deSelector)
    const nhaxb = useSelector(nha_xbSelector)
    const nha_cc = useSelector(nha_ccSelector)
    const [pathImage, setPathImage] = useState(undefined)
    const dispatch = useDispatch()
    if (products.length <= 0) {
        throw dispatch(getSan_pham())
    }
    if (chu_de.length <= 0) {
        throw dispatch(getChu_de())
    }
    if (nhaxb.length <= 0) {
        throw dispatch(getNha_xb())
    }
    if (nha_cc.length <= 0) {
        throw dispatch(getNha_cc())
    }
    useEffect(() => {
        document.title = "Products"
        $("#main").scrollTop(0)
    }, [products])

    useEffect(() => {
        // clear the URL image
        return () => {
            URL.revokeObjectURL(pathImage)
        }
    },[pathImage])

    useEffect(() => {
        dispatch(getChu_de())
        dispatch(getSan_pham())
        dispatch(getNha_xb())
        dispatch(getNha_cc())
    }, [])

    const myRef = useRef(() => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        $('#productsTable').dataTable()
        $("#upFileEdit").click(function () {
            $("#fileEdit").trigger("click");
        });
    })

    const editProduct = item => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#update').offset().top
        }, 'slow')
        setEditMaSP(item.id)
        setEditTenSP(item.name)
        setEditMaCD(item.MaChuDe)
        setEditMaNXB(item.MaNXB)
        setEditMaNCC(item.MaNCC)
        setEditDG(item.cost)
        setEditSL(item.SoLuong)
        setEditAnh(item.img)
        setEditMoTa(item.mota)
        setEditIsSach(item.isSach)
    }
    const cancel = () => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        setEditMaSP('')
        setEditTenSP('')
        setEditMaCD('')
        setEditMaNXB('')
        setEditDG('')
        setEditSL('')
        setEditMoTa('')
        setEditIsSach('')
        setEditAnh('')
        setEditMaNCC('')
        setPathImage(undefined)
        $('#main').scrollTop(0)
    }
    const updateSubmit = e => {
        e.preventDefault()
        const data = {
            "MaSanPham": editMaSP,
            "TenSanPham": editTenSP,
            "MaChuDe": editMaCD,
            "MaNXB": editMaNXB,
            "DonGiaBan": Number.parseInt(editDG),
            "SoLuong": Number.parseInt(editSL),
            "MoTa": editMoTa,
            "isSach": editIsSach,
            "MaNCC": editMaNCC,
            "Anh": editAnh,
        }
        dispatch(updateSan_pham(data)).unwrap()
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

    const deleteItem = id => {
        const data = {
            'MaSanPham': id.id
        }
        Swal.fire({
            title: `<h1>B???n c?? th???t s??? mu???n x??a ${id.name}?</h1>`,
            showDenyButton: true,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
                cancelButton: 'size-2',
                confirmButton: 'size-2',
                denyButton: 'size-2',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                return dispatch(deleteSan_pham(data)).unwrap()
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
                return Promise.reject()
            } else {
                return Promise.reject()
            }
        }).then(res => {
            if (res.code) {
                // window.location.reload()
                Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
            }
            else {
                Swal.fire('Error!', '<h1>' + res.message + '</h1>', 'error')
            }
        })

    }

    const [editMaSP, setEditMaSP] = useState('')
    const [editTenSP, setEditTenSP] = useState('')
    const [editMaCD, setEditMaCD] = useState('')
    const [editMaNXB, setEditMaNXB] = useState('')
    const [editMaNCC, setEditMaNCC] = useState('')
    const [editDG, setEditDG] = useState('')
    const [editSL, setEditSL] = useState(1)
    const [editAnh, setEditAnh] = useState('')
    const [editMoTa, setEditMoTa] = useState('')
    const [editIsSach, setEditIsSach] = useState(0)
    return (
        <div className="col-div-8" ref={myRef.current}>
            <div className="box-8">
                <div className="content-box">
                    <p>Danh s??ch c??c s???n ph???m <span> <Link to="/admin/products/create" className="btn btn-pink btn-outline-pink text-decoration-none">Th??m s???n ph???m </Link></span></p>
                    <br />
                    <table id="productsTable">
                        <thead>
                            <tr>
                                <th width="5%">M??</th>
                                <th width="30%">T??n s???n ph???m</th>
                                <th width="10%">T??n ch??? ?????</th>
                                <th>T??n NXB</th>
                                <th>T??n NCC</th>
                                <th>Gi??</th>
                                <th>Lo???i</th>
                                <th width="5%">S??? l?????ng</th>
                                <th>Thao t??c</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.TenChuDe}</td>
                                    <td>{item.TenNXB}</td>
                                    <td>{item.TenNCC}</td>
                                    <td>{(item.cost).toLocaleString()}</td>
                                    <td>{item.isSach === 0 ? '????? d??ng' : 'S??ch'}</td>
                                    <td>{item.SoLuong}</td>
                                    <td><button onClick={e => { editProduct(item) }} className="btn btn-info"><i className="ace-icon fa fa-pencil-square-o bigger-120"></i></button>
                                        <button onClick={e => { deleteItem(item) }} className="btn btn-danger delete-prompt ms-1"><i className="ace-icon fa fa-trash-o bigger-120"></i></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div id="update" className="box-8 mt-5">
                <div className="content-box">
                    <p>Ch???nh s???a s???n ph???m</p>
                    <br />
                    <div>
                        <form id="formUpdate" onSubmit={updateSubmit}>
                            <div className="mt-3">
                                <label>M?? s???n ph???m</label>
                                <br />
                                <input type="text" className="form-control" value={editMaSP} onChange={e => { setEditMaSP(e.target.value) }} placeholder="M?? s???n ph???m" readOnly />
                            </div>
                            <div className="mt-3">
                                <label>T??n s???n ph???m</label>
                                <br />
                                <input type="text" className="form-control" value={editTenSP} onChange={e => { setEditTenSP(e.target.value) }} placeholder="T??n s???n ph???m" required />
                            </div>
                            <div className="mt-3">
                                <label>Ch??? ?????</label>
                                <br />
                                <select name="editChuDe" className="form-control" value={editMaCD} onChange={e => { setEditMaCD(e.target.value) }} required >
                                    <option value="" disabled>--Ch???n ch??? ?????--</option>
                                    {chu_de.map(item => (
                                        <option value={item.MaChuDe} key={item.MaChuDe}>{item.TenChuDe}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Nh?? xu???t b???n</label>
                                <br />
                                <select name="editNXB" className="form-control" value={editMaNXB} onChange={e => { setEditMaNXB(e.target.value) }} required >
                                    <option value="" disabled>--Ch???n Nh?? xu???t b???n--</option>
                                    {nhaxb.map(item => (
                                        <option value={item.MaNXB} key={item.MaNXB}>{item.TenNXB}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Nh?? cung c???p</label>
                                <br />
                                <select name="editNCC" className="form-control" value={editMaNCC} onChange={e => { setEditMaNCC(e.target.value) }} required >
                                    <option value="" disabled>--Ch???n nh?? cung c???p--</option>
                                    {nha_cc.map(item => (
                                        <option value={item.MaNCC} key={item.MaNCC}>{item.TenNCC}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Th??? lo???i s???n ph???m</label>
                                <br />
                                <select name="editSach" className="form-control" value={editIsSach} onChange={e => { setEditIsSach(e.target.value) }} required >
                                    <option value="" disabled>--Ch???n lo???i s???n ph???m--</option>
                                    <option value="0">????? d??ng h???c t???p</option>
                                    <option value="1">S??ch v???</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>????n gi??</label>
                                <br />
                                <input type="number" min="1000" className="form-control" value={editDG} onChange={e => { setEditDG(e.target.value) }} placeholder="Gi?? s???n ph???m" />
                            </div>
                            <div className="mt-3">
                                <label>S??? l?????ng</label>
                                <br />
                                <input type="number" min="0" className="form-control" value={editSL} onChange={e => { setEditSL(e.target.value) }} placeholder="T??n s???n ph???m" required />
                            </div>
                            <div className="mt-3">
                                <label>???nh</label>
                                <br />
                                <input type="file" hidden id="fileEdit" onChange={e => {
                                    if(e.target.files[0].type.split('/')[0] === 'image'){
                                        $('#filenameNew').val(e.target.value.split('\\')[e.target.value.split('\\').length - 1])
                                        setEditAnh(e.target.value.split('\\')[e.target.value.split('\\').length - 1])
                                        let path = URL.createObjectURL(e.target.files[0])
                                        setPathImage(path)
                                    }
                                    else{
                                        Swal.fire('Error!', '<h1>B???n ph???i ch???n file l?? ???nh </h1>', 'error')
                                        e.target.value = null
                                    }
                                }}
                                    accept="image/*" 
                                />
                                <span className="d-flex">
                                    <input type="text" id="filenameEdit" className="form-control" value={editAnh} onChange={e => { setEditAnh(e.target.value) }} placeholder="???nh s???n ph???m" required />
                                    <input id="upFileEdit" type="button" className="btn btn-pink" value="..." />
                                </span>
                                {pathImage&&<img src={pathImage} width="200"/>}
                            </div>
                            <div className="mt-3">
                                <label>M?? t???</label>
                                <br />
                                <textarea rows="4" className="form-control" value={editMoTa} onChange={e => { setEditMoTa(e.target.value) }} placeholder="T??n s???n ph???m" required />
                            </div>
                            <button type="submit" className="btn btn-pink mt-5">L??u l???i</button>
                            <button type="reset" onClick={e => {
                                e.preventDefault()
                                cancel()
                            }} className="btn ms-2 btn-pink mt-5">H???y b???</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
