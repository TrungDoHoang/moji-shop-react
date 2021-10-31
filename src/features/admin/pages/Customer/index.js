import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'
import { getKhach_hang, khach_hangSelector } from '../../../../app/reducers/adminSlice'

export default function Customer() {
    const khach_hang = useSelector(khach_hangSelector)
    const dispatch = useDispatch()
    if (khach_hang.length <= 0) {
        throw dispatch(getKhach_hang())
    }

    const myRef = useRef(() => {
        $('#khach_hangTable').dataTable()
    })
    return (
        <div className="col-div-8" ref={myRef.current}>
            <div className="box-8">
                <div className="content-box">
                    <p>Danh sách các khách hàng <span><a href="#add">Thêm khách hàng</a></span></p>
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
                                    <td><button>Sửa</button> <button>Xóa</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div  id="add" className="box-8 mt-5">
                <div className="content-box">
                    <p>Thêm khách hàng</p>
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
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="NXB" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn Nhà xuất bản--</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="NCC" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn nhà cung cấp--</option>
                                    <option value="1">1</option>
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
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="editNXB" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn Nhà xuất bản--</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                            <div className="mt-3">
                            <select name="editNCC" className="form-control" required defaultValue={''}>
                                    <option value="" disabled>--Chọn nhà cung cấp--</option>
                                    <option value="1">1</option>
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
