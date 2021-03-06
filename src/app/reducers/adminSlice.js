import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../axios'

export const getSan_pham = createAsyncThunk('admin/getSan_pham', () => {
    return API.get('product/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const createSan_pham = createAsyncThunk('admin/createSan_pham', (data) => {
    return API.post('product/create.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const updateSan_pham = createAsyncThunk('admin/updateSan_pham', (data) => {
    return API.put('product/update.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const deleteSan_pham = createAsyncThunk('admin/deleteSan_pham', (data) => {
    return API({
        method: 'DELETE',
        url: 'product/delete.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})

export const getChu_de = createAsyncThunk('admin/getChu_de', () => {
    return API.get('category/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const updateChu_de = createAsyncThunk('admin/updateChu_de', (data) => {
    return API.put('category/update.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const createChu_de = createAsyncThunk('admin/createChu_de', (data) => {
    return API({
        method: 'POST',
        url: 'category/create.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})
export const deleteChu_de = createAsyncThunk('admin/deleteChu_de', (data) => {
    return API({
        method: 'DELETE',
        url: 'category/delete.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})

export const getNha_cc = createAsyncThunk('admin/getNha_cc', () => {
    return API.get('nhacc/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const getNha_xb = createAsyncThunk('admin/getNha_xb', () => {
    return API.get('nhaxb/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})

export const getQuyen = createAsyncThunk('admin/getQuyen', () => {
    return API.get('staff/quyen.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const getNhan_vien = createAsyncThunk('admin/getNhan_vien', () => {
    return API.get('staff/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const createNhan_vien = createAsyncThunk('admin/createNhan_vien', (data) => {
    return API.post('staff/create.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const updateNhan_vien = createAsyncThunk('admin/updateNhan_vien', (data) => {
    return API.put('staff/update.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const deleteNhan_vien = createAsyncThunk('admin/deleteNhan_vien', (data) => {
    return API({
        method: 'DELETE',
        url: 'staff/delete.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})

export const getKhach_hang = createAsyncThunk('admin/getKhach_hang', () => {
    return API.get('customer/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const updateKhach_hang = createAsyncThunk('admin/updateKhach_hang', (data) => {
    return API.put('customer/update.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const deleteKhach_hang = createAsyncThunk('admin/deleteKhach_hang', (data) => {
    return API({
        method: 'DELETE',
        url: 'customer/delete.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})

export const getHoa_don = createAsyncThunk('admin/getHoa_don', () => {
    return API.get('hoadon/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const updateHoa_don = createAsyncThunk('admin/updateHoa_don', (data) => {
    return API.put('hoadon/update.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const deleteHoa_don = createAsyncThunk('admin/deleteHoa_don', (data) => {
    return API({
        method: 'DELETE',
        url: 'hoadon/delete.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})
export const getCTHoa_don = createAsyncThunk('admin/getCTHoa_don', (id) => {
    return API.get('hoadon/show.php?sohdb=' + id)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const updateCTHoa_don = createAsyncThunk('admin/updateCTHoa_don', (data) => {
    return API.put('hoadon/updatect.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const createCTHoa_don = createAsyncThunk('admin/createCTHoa_don', (data) => {
    return API({
        method: 'POST',
        url: 'hoadon/createct.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})
export const deleteCTHoa_don = createAsyncThunk('admin/deleteCTHoa_don', (data) => {
    return API({
        method: 'DELETE',
        url: 'hoadon/deletect.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})
export const getDoanh_thu = createAsyncThunk('admin/getDoanh_thu', () => {
    return API.get('hoadon/doanhthu.php')
        .then((response) => response.data)
        .catch(err => err.message)
})

export const getTin = createAsyncThunk('admin/getTin', () => {
    return API.get('news/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const updateTin = createAsyncThunk('admin/updateTin', (data) => {
    return API.put('news/update.php', data)
        .then((response) => response.data)
        .catch(err => err.message)
})
export const createTin = createAsyncThunk('admin/createTin', (data) => {
    return API({
        method: 'POST',
        url: 'news/create.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})
export const deleteTin = createAsyncThunk('admin/deleteTin', (data) => {
    return API({
        method: 'DELETE',
        url: 'news/delete.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        san_pham: [],
        chu_de: [],
        nha_cc: [],
        nha_xb: [],
        khach_hang: [],
        hoa_don: [],
        cthoa_don: [],
        quyen: [],
        staff: [],
        news: [],
    },
    reducers: {

    },
    extraReducers: {
        [getSan_pham.fulfilled]: (state, action) => {
            let data = action.payload.product
            if (data) {
                state.san_pham = data.map(product => ({
                    ...product,
                    cost: Number.parseInt(product.cost),
                    isSach: Number.parseInt(product.isSach),
                    SoLuong: Number.parseInt(product.SoLuong)
                }))
            }
        },
        [getSan_pham.rejected]: (state, action) => {
            console.log("Get s???n ph???m th???t b???i")
        },
        [createSan_pham.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.san_pham = []
            }
        },
        [createSan_pham.rejected]: (state, action) => {
            console.log("Create s???n ph???m th???t b???i")
        },
        [updateSan_pham.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.san_pham = []
            }
        },
        [updateSan_pham.rejected]: (state, action) => {
            console.log("Update s???n ph???m th???t b???i")
        },
        [deleteSan_pham.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.san_pham = []
            }
        },
        [deleteSan_pham.rejected]: (state, action) => {
            console.log("Delete s???n ph???m th???t b???i")
        },

        [getChu_de.fulfilled]: (state, action) => {
            let data = action.payload.category
            if (data) {
                state.chu_de = data.map(item => ({
                    ...item,
                    isSach: Number.parseInt(item.isSach),
                }))
            }
        },
        [getChu_de.rejected]: (state, action) => {
            console.log("Get ch??? ????? th???t b???i")
        },
        [updateChu_de.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.chu_de = []
            }
        },
        [updateChu_de.rejected]: (state, action) => {
            console.log("update ch??? ????? th???t b???i")
        },
        [deleteChu_de.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.chu_de = []
            }
        },
        [deleteChu_de.rejected]: (state, action) => {
            console.log("X??a ch??? ????? th???t b???i")
        },
        [createChu_de.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.chu_de = []
            }
        },
        [createChu_de.rejected]: (state, action) => {
            console.log("Th??m ch??? ????? th???t b???i")
        },

        [getNha_cc.fulfilled]: (state, action) => {
            let data = action.payload.nhacc
            if (data) {
                state.nha_cc = data
            }
        },
        [getNha_cc.rejected]: (state, action) => {
            console.log("Get nh?? cung c???p th???t b???i")
        },

        [getNha_xb.fulfilled]: (state, action) => {
            let data = action.payload.nhaxb
            if (data) {
                state.nha_xb = data
            }
        },
        [getNha_xb.rejected]: (state, action) => {
            console.log("Get nh?? xu???t b???n th???t b???i")
        },

        [getKhach_hang.fulfilled]: (state, action) => {
            let data = action.payload.customer
            if (data) {
                state.khach_hang = data
            }
        },
        [getKhach_hang.rejected]: (state, action) => {
            console.log("Get kh??ch h??ng th???t b???i")
        },
        [updateKhach_hang.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.khach_hang = []
            }
        },
        [updateKhach_hang.rejected]: (state, action) => {
            console.log("update kh??ch h??ng th???t b???i")
        },
        [deleteKhach_hang.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.khach_hang = []
            }
        },
        [deleteKhach_hang.rejected]: (state, action) => {
            console.log("update kh??ch h??ng th???t b???i")
        },

        [getQuyen.fulfilled]: (state, action) => {
            let data = action.payload.quyen
            if (data) {
                state.quyen = data
            }
        },
        [getQuyen.rejected]: (state, action) => {
            console.log("Get quy???n th???t b???i")
        },
        [getNhan_vien.fulfilled]: (state, action) => {
            let data = action.payload.staff
            if (data) {
                state.staff = data
            }
        },
        [getNhan_vien.rejected]: (state, action) => {
            console.log("Get nh??n vi??n th???t b???i")
        },
        [updateNhan_vien.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.staff = []
            }
        },
        [updateNhan_vien.rejected]: (state, action) => {
            console.log("update nh??n vi??n th???t b???i")
        },
        [createNhan_vien.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.staff = []
            }
        },
        [createNhan_vien.rejected]: (state, action) => {
            console.log("create nh??n vi??n th???t b???i")
        },
        [deleteNhan_vien.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.staff = []
            }
        },
        [deleteNhan_vien.rejected]: (state, action) => {
            console.log("update nh??n vi??n th???t b???i")
        },

        [getHoa_don.fulfilled]: (state, action) => {
            let data = action.payload.hoadon
            if (data) {
                state.hoa_don = data
            }
        },
        [getHoa_don.rejected]: (state, action) => {
            console.log("Get h??a ????n th???t b???i")
        },
        [getCTHoa_don.fulfilled]: (state, action) => {
            let data = action.payload.cthoadon
            if (data) {
                state.cthoa_don = data
            }
        },
        [getCTHoa_don.rejected]: (state, action) => {
            console.log("Get chi ti???t h??a ????n th???t b???i")
        },
        [updateHoa_don.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.hoa_don = []
            }
        },
        [updateHoa_don.rejected]: (state, action) => {
            console.log("update h??a ????n th???t b???i")
        },
        [updateCTHoa_don.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.cthoa_don = []
            }
        },
        [updateCTHoa_don.rejected]: (state, action) => {
            console.log("update chi ti???t h??a ????n th???t b???i")
        },
        [deleteHoa_don.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.hoa_don = []
            }
        },
        [deleteHoa_don.rejected]: (state, action) => {
            console.log("update h??a ????n th???t b???i")
        },
        [deleteCTHoa_don.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.cthoa_don = []
            }
        },
        [deleteCTHoa_don.rejected]: (state, action) => {
            console.log("X??a chi ti???t h??a ????n th???t b???i")
        },
        [createCTHoa_don.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.cthoa_don = []
            }
        },
        [createCTHoa_don.rejected]: (state, action) => {
            console.log("Th??m chi ti???t h??a ????n th???t b???i")
        },

        [getTin.fulfilled]: (state, action) => {
            let data = action.payload
            if (data && data.news) {
                state.news = data.news
            }
            if (data && data.posts) {
                state.news = (state.news).concat(data.posts)
            }
        },
        [updateTin.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.news = []
            }
        },
        [deleteTin.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.news = []
            }
        },
        [createTin.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.news = []
            }
        },
    }
})

// export reducers
export const adminReducer = adminSlice.reducer

export const san_phamSelector = state => state.adminReducer.san_pham
export const chu_deSelector = state => state.adminReducer.chu_de
export const nha_ccSelector = state => state.adminReducer.nha_cc
export const nha_xbSelector = state => state.adminReducer.nha_xb
export const khach_hangSelector = state => state.adminReducer.khach_hang
export const staffSelector = state => state.adminReducer.staff
export const quyenSelector = state => state.adminReducer.quyen
export const hoa_donSelector = state => state.adminReducer.hoa_don
export const cthoa_donSelector = state => state.adminReducer.cthoa_don
export const newsSelector = state => state.adminReducer.news

export default adminReducer