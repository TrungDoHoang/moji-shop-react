import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import 'datatables.net'
import $ from 'jquery'
import { chu_deSelector, getChu_de, getNha_cc, getNha_xb, getSan_pham, nha_ccSelector, nha_xbSelector, san_phamSelector } from '../../../../app/reducers/adminSlice'

function Products() {

    const products = useSelector(san_phamSelector)
    const chu_de = useSelector(chu_deSelector)
    const nhaxb = useSelector(nha_xbSelector)
    const nha_cc = useSelector(nha_ccSelector)
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

    const myRef = useRef(() => {
        $('#productsTable').dataTable()
    })
    return (
        <div className="col-div-8" ref={myRef.current}>
            <div className="box-8">
                <div className="content-box">
                    <p>Danh sách các sản phẩm <span><a href="#add">Thêm sản phẩm</a></span></p>
                    <br />
                    <table id="productsTable">
                        <thead>
                            <tr>
                                <th width="5%">Mã</th>
                                <th width="30%">Tên sản phẩm</th>
                                <th width="10%">Tên chủ đề</th>
                                <th>Tên NXB</th>
                                <th>Tên NCC</th>
                                <th>Giá</th>
                                <th>Loại</th>
                                <th width="5%">Số lượng</th>
                                <th>Thao tác</th>
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
                                    <td>{item.isSach === 0 ? 'Đồ dùng' : 'Sách'}</td>
                                    <td>{item.SoLuong}</td>
                                    <td><button>Sửa</button> <button>Xóa</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div  id="add" className="box-8 mt-5">
                <div className="content-box">
                    <p>Thêm sản phẩm</p>
                    <br />
                    <div>
                        <form>
                            <div className="mt-3">
                                <label>Tên sản phẩm</label>
                                <br />
                                <input type="text" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <div className="mt-3">
                                <select name="ChuDe" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn chủ đề--</option>
                                    {chu_de.map(item => (
                                        <option value={item.MaChuDe} key={item.MaChuDe}>{item.TenChuDe}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="NXB" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn Nhà xuất bản--</option>
                                    {nhaxb.map(item => (
                                        <option value={item.MaNXB} key={item.MaNXB}>{item.TenNXB}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="NCC" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn nhà cung cấp--</option>
                                    {nha_cc.map(item => (
                                        <option value={item.MaNCC} key={item.MaNCC}>{item.TenNCC}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="isSach" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn loại sản phẩm--</option>
                                    <option value="0">Đồ dùng học tập</option>
                                    <option value="1">Sách vở</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Đơn giá</label>
                                <br />
                                <input type="number" min="1000" className="form-control" placeholder="Giá sản phẩm" />
                            </div>
                            <div className="mt-3">
                                <label>Số lượng</label>
                                <br />
                                <input type="number" min="10" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <div className="mt-3">
                                <label>Ảnh</label>
                                <br />
                                <input type="text" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <div className="mt-3">
                                <label>Mô tả</label>
                                <br />
                                <input type="text" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <button type="submit" className="btn btn-pink mt-5">Tạo mới</button>
                        </form>
                    </div>
                </div>
            </div>
            <div  id="update" className="box-8 mt-5">
                <div className="content-box">
                    <p>Chỉnh sửa sản phẩm</p>
                    <br />
                    <div>
                        <form>
                            <div className="mt-3">
                                <label>Mã sản phẩm</label>
                                <br />
                                <input type="text" className="form-control" placeholder="Tên sản phẩm" readOnly/>
                            </div>
                            <div className="mt-3">
                                <label>Tên sản phẩm</label>
                                <br />
                                <input type="text" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <div className="mt-3">
                                <select name="editChuDe" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn chủ đề--</option>
                                    {chu_de.map(item => (
                                        <option value={item.MaChuDe} key={item.MaChuDe}>{item.TenChuDe}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="editNXB" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn Nhà xuất bản--</option>
                                    {nhaxb.map(item => (
                                        <option value={item.MaNXB} key={item.MaNXB}>{item.TenNXB}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="editNCC" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn nhà cung cấp--</option>
                                    {nha_cc.map(item => (
                                        <option value={item.MaNCC} key={item.MaNCC}>{item.TenNCC}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="editSach" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn loại sản phẩm--</option>
                                    <option value="0">Đồ dùng học tập</option>
                                    <option value="1">Sách vở</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Đơn giá</label>
                                <br />
                                <input type="number" min="1000" className="form-control" placeholder="Giá sản phẩm" />
                            </div>
                            <div className="mt-3">
                                <label>Số lượng</label>
                                <br />
                                <input type="number" min="10" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <div className="mt-3">
                                <label>Ảnh</label>
                                <br />
                                <input type="text" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <div className="mt-3">
                                <label>Mô tả</label>
                                <br />
                                <input type="text" className="form-control" placeholder="Tên sản phẩm" />
                            </div>
                            <button type="submit" className="btn btn-pink mt-5">Lưu lại</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products
