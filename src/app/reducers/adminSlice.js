import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { data } from 'jquery'
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

export const getKhach_hang = createAsyncThunk('admin/getKhach_hang', () => {
    return API.get('customer/read.php')
        .then((response) => response.data)
        .catch(err => err.message)
})
export const updateKhach_hang = createAsyncThunk('admin/updateKhach_hang', (data) => {
    return API.put('customer/update.php',data)
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
    return API.put('hoadon/update.php',data)
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

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        san_pham: [],
        chu_de: [],
        nha_cc: [],
        nha_xb: [],
        khach_hang: [],
        hoa_don: [],
    },
    reducers:{
        
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
            console.log("Get sản phẩm thất bại")
        },
        [createSan_pham.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.san_pham = []
            }
        },
        [createSan_pham.rejected]: (state, action) => {
            console.log("Create sản phẩm thất bại")
        },
        [updateSan_pham.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.san_pham = []
            }
        },
        [updateSan_pham.rejected]: (state, action) => {
            console.log("Update sản phẩm thất bại")
        },
        [deleteSan_pham.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.san_pham = []
            }
        },
        [deleteSan_pham.rejected]: (state, action) => {
            console.log("Delete sản phẩm thất bại")
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
            console.log("Get chủ đề thất bại")
        },

        [getNha_cc.fulfilled]: (state, action) => {
            let data = action.payload.nhacc
            if (data) {
                state.nha_cc = data
            }
        },
        [getNha_cc.rejected]: (state, action) => {
            console.log("Get nhà cung cấp thất bại")
        },

        [getNha_xb.fulfilled]: (state, action) => {
            let data = action.payload.nhaxb
            if (data) {
                state.nha_xb = data
            }
        },
        [getNha_xb.rejected]: (state, action) => {
            console.log("Get nhà xuất bản thất bại")
        },

        [getKhach_hang.fulfilled]: (state, action) => {
            let data = action.payload.customer
            if (data) {
                state.khach_hang = data
            }
        },
        [getKhach_hang.rejected]: (state, action) => {
            console.log("Get khách hàng thất bại")
        },
        [updateKhach_hang.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.khach_hang = []
            }
        },
        [updateKhach_hang.rejected]: (state, action) => {
            console.log("update khách hàng thất bại")
        },
        [deleteKhach_hang.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.khach_hang = []
            }
        },
        [deleteKhach_hang.rejected]: (state, action) => {
            console.log("update khách hàng thất bại")
        },

        [getHoa_don.fulfilled]: (state, action) => {
            let data = action.payload.hoadon
            if (data) {
                state.hoa_don = data
            }
        },
        [getHoa_don.rejected]: (state, action) => {
            console.log("Get hóa đơn thất bại")
        },
        [updateHoa_don.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.hoa_don = []
            }
        },
        [updateHoa_don.rejected]: (state, action) => {
            console.log("update hóa đơn thất bại")
        },
        [deleteHoa_don.fulfilled]: (state, action) => {
            let data = action.payload
            if (data.code) {
                state.hoa_don = []
            }
        },
        [deleteHoa_don.rejected]: (state, action) => {
            console.log("update hóa đơn thất bại")
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
export const hoa_donSelector = state => state.adminReducer.hoa_don

export default adminReducer