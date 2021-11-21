import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'
import slugify from 'slugify'
import Swal from 'sweetalert2'
import { chu_deSelector, createChu_de, deleteChu_de, getChu_de, getDoanh_thu, updateChu_de } from '../../../../app/reducers/adminSlice'
import HeaderCard from '../../components/HeaderCard'
import { Line } from 'react-chartjs-2'

function Dashboard() {
    const chu_de = useSelector(chu_deSelector)
    useEffect(() => {
        $("#main").scrollTop(0)
        document.title = 'Dashboard'
    }, [chu_de])
    useEffect(() => {
        dispatch(getDoanh_thu())
            .then(res => {
                setDoanhthu(res.payload)
            })
    }, [])
    const [editMaChuDe, setEditMaChuDe] = useState('')
    const [editTenChuDe, setEditTenChuDe] = useState('')
    const [editIsSach, setEditIsSach] = useState('')
    const [newTenChuDe, setNewTenChuDe] = useState('')
    const [newIsSach, setNewIsSach] = useState('')
    const [doanhthu, setDoanhthu] = useState('')

    const dispatch = useDispatch()
    if (chu_de.length <= 0) {
        throw dispatch(getChu_de())
    }

    const myRef = useRef(() => {
        $('#formUpdate :input').prop('disabled', true)
        $('#chu_deTable').dataTable()
    })
    const cancel = () => {
        $('#formUpdate :input, #formUpdate select').prop('disabled', true)
        $('#formAdd :input, #formUpdate select').prop('disabled', true)
        setEditMaChuDe('')
        setEditTenChuDe('')
        setEditIsSach('')
        setNewTenChuDe('')
        setNewIsSach('')
    }
    const editCD = item => {
        $('#formUpdate :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#update').offset().top
        }, 'slow')
        setEditMaChuDe(item.MaChuDe)
        setEditTenChuDe(item.TenChuDe)
        setEditIsSach(item.isSach)
    }
    const updateSubmit = e => {
        e.preventDefault()
        const data = {
            "MaChuDe": editMaChuDe,
            "TenChuDe": editTenChuDe,
            "isSach": editIsSach,
            "TenVanTat": slugify(editTenChuDe.toLowerCase(), '_'),
        }
        dispatch(updateChu_de(data)).unwrap()
            .then(res => {
                if (res.code) {
                    Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
                        .then(res => {
                            if (res.isConfirmed)
                                cancel()
                        })
                }
                else {
                    Swal.fire('Error!', '<h1>' + res.message + '</h1>', 'error')
                }
            })
    }

    const createCD = () => {
        $('#formAdd :input').prop('disabled', false)
        $('#main').animate({
            scrollTop: $('#add').offset().top
        }, 'slow')
    }

    const deleteCD = id => {
        const data = {
            'MaChuDe': id.MaChuDe
        }
        Swal.fire({
            title: `<h1>Bạn có thật sự muốn xóa chủ đề '${id.TenChuDe}'?</h1>`,
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
                dispatch(deleteChu_de(data)).unwrap()
                    .then(res => {
                        if (res.code) {
                            Swal.fire('Saved!', '<h1>' + res.message + '</h1>', 'success')
                        }
                        else {
                            Swal.fire('Error!', '<h1>' + res.message + '</h1>', 'error')
                        }
                    })
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    const addSubmit = e => {
        e.preventDefault()
        const data = {
            "TenChuDe": newTenChuDe,
            "isSach": newIsSach,
            "TenVanTat": slugify(newTenChuDe.toLowerCase(), '_')
        }
        dispatch(createChu_de(data)).unwrap()
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
    return (
        <>
            <HeaderCard />
            <div className="col-div-8">
                <div className="box-8 p-5 mb-5">
                    <h2>Biểu đổ doanh thu của năm nay</h2>
                    <Line 
                    data={{
                        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September','October','November','December'],
                        datasets: [
                          {
                            label: '(VNĐ)',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: doanhthu
                          }
                        ]
                      }}

                      />

                </div>
            </div>
            <div className="col-div-8" ref={myRef.current}>
                <div className="box-8">
                    <div className="content-box">
                        <p>Danh sách các loại sản phẩm <span>
                            <button type="button" className="btn btn-pink ms-3" onClick={() => { createCD() }}>
                                Thêm loại sản phẩm
                            </button>
                        </span></p>

                        <br />
                        <table id="chu_deTable">
                            <thead>
                                <tr>
                                    <th width="5%">Mã</th>
                                    <th width="25%">Tên chủ đề</th>
                                    <th>Loại</th>
                                    <th>Tên vắn tắt</th>
                                    <th width="12%">Số lượng sản phẩm</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chu_de.map(item => (
                                    <tr key={item.MaChuDe}>
                                        <td>{item.MaChuDe}</td>
                                        <td>{item.TenChuDe}</td>
                                        <td>{item.isSach === '1' ? 'Sách' : 'Đồ dùng học tập'}</td>
                                        <td>{item.TenVanTat}</td>
                                        <td>{item.SoSanPham}</td>
                                        <td><button onClick={e => { editCD(item) }} className="btn btn-info"><i className="ace-icon fa fa-pencil-square-o bigger-120"></i></button>
                                            <button onClick={e => { deleteCD(item) }} className="btn btn-danger delete-prompt ms-1"><i className="ace-icon fa fa-trash-o bigger-120"></i></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="update" className="box-8 mt-5">
                    <div className="content-box">
                        <p>Chỉnh sửa loại sản phẩm</p>
                        <br />
                        <div>
                            <form id="formUpdate" onSubmit={updateSubmit}>
                                <div className="mt-3">
                                    <label>Số loại sản phẩm</label>
                                    <br />
                                    <input type="text" className="form-control" value={editMaChuDe} placeholder="Mã loại sản phẩm" readOnly />
                                </div>
                                <div className="mt-3">
                                    <label>Tên loại sản phẩm</label>
                                    <br />
                                    <input type="text" className="form-control" value={editTenChuDe} onChange={e => { setEditTenChuDe(e.target.value) }} placeholder="Tên loại sản phẩm" />
                                </div>
                                <div className="mt-3">
                                    <label>Thể loại sản phẩm</label>
                                    <br />
                                    <select name="editSanPham" className="form-control" value={editIsSach} onChange={e => { setEditIsSach(e.target.value) }} required >
                                        <option value="" disabled>--Chọn thể loại sản phẩm--</option>
                                        <option value="0">Đồ dùng học tập</option>
                                        <option value="1">Sách vở</option>
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
                        <p>Thêm loại sản phẩm</p>
                        <br />
                        <div>
                            <form id="formAdd" onSubmit={addSubmit}>
                                <div className="mt-3">
                                    <label>Tên loại sản phẩm</label>
                                    <br />
                                    <input type="text" className="form-control" value={newTenChuDe} onChange={e => { setNewTenChuDe(e.target.value) }} placeholder="Tên loại sản phẩm" />
                                </div>
                                <div className="mt-3">
                                    <select name="newSanPham" className="form-control" value={newIsSach} onChange={e => { setNewIsSach(e.target.value) }} required >
                                        <option value="" disabled>--Chọn sản phẩm--</option>
                                        <option value="0">Đồ dùng học tập</option>
                                        <option value="1">Sách vở</option>
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
        </>
    )
}

export default Dashboard
