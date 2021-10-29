import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import API from '../axios'

export const registerAPI = createAsyncThunk('user/register', (data) => {
    return API({
        method: 'POST',
        url: 'account/register.php',
        data
    })
        .then((response) => response.data)
        .catch((error) => error.message)
})
export const updateAPI = createAsyncThunk('user/update', (data) => {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
    return API({
        method: 'PUT',
        url: 'account/update.php',
        headers: { "Authorization": `Bearer ${token}` },
        data
    })
        .then((response) => response.data)
        .catch((error) => error.message)
})
export const changePassAPI = createAsyncThunk('user/changePassword', (data) => {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
    return API({
        method: 'PUT',
        url: 'account/changepass.php',
        headers: { "Authorization": `Bearer ${token}` },
        data
    })
        .then((response) => response.data)
        .catch((error) => error.message)
})
export const loginAPI = createAsyncThunk('user/login', (data) => {
    return API({
        method: 'POST',
        url: 'account/login.php',
        data
    })
        .then((response) => response.data)
        .catch((error) => error.message)
})
export const getUser = createAsyncThunk('user/getUser', () => {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
    return API.get(
        'account/user.php',
        { headers: { "Authorization": `Bearer ${token}` } }
    )
        .then((response) => response.data)
        .catch((error) => error.message)
})
export const getOrder = createAsyncThunk('user/getOrder', (id) => {
    return API.get('bill/read.php?_MaKH='+id,)
        .then((response) => response.data)
        .catch((error) => error.message)
})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        register: {},
        login: {},
        order: []
    },
    reducers: {
        logOutAccount: (state, action) => {
            state.user = {};
            localStorage.setItem('token', "")
        }
    },
    extraReducers: {
        [registerAPI.fulfilled]: (state, action) => {
            let data = action.payload
            if (data) {
                state.register = data
            }
        },
        [registerAPI.rejected]: (state, action) => {
            console.error('Truyền dữ liệu đăng ký không thành công!')
        },

        [loginAPI.fulfilled]: (state, action) => {
            let data = action.payload
            if (data) {
                state.login = data
                if (data.code === 200) {
                    localStorage.setItem('token', action.payload.token)
                }
            }
        },
        [loginAPI.rejected]: (state, action) => {
            console.error('Truyền dữ liệu đăng nhập không thành công!')
        },

        [getUser.fulfilled]: (state, action) => {
            let data = action.payload
            if (data && data.status === 200) {
                state.user = data.user
            }
        },
        [getUser.rejected]: (state, action) => {
            console.error('Truyền dữ liệu lấy thông tin người dùng không thành công!')
        },

        [updateAPI.rejected]: (state, action) => {
            console.error('Truyền dữ liệu update thông tin người dùng không thành công!')
        },

        [changePassAPI.rejected]: (state, action) => {
            console.error('Truyền dữ liệu thay đổi mật khẩu người dùng không thành công!')
        },

        [getOrder.fulfilled]: (state, action) => {
            let data = action.payload
            if(data.bill){
                state.order = data.bill.map(item => ({
                    ...item,
                    Total: Number.parseInt(item.Total).toLocaleString()
                }))
            }
        },
        [getOrder.rejected]: (state, action) => {
            console.error('Truyền dữ liệu lấy danh sách đơn hàng không thành công!')
        }
    }
})

// export reducer
export const userReducer = userSlice.reducer

// export Selector
export const userSelector = state => state.userReducer.user
export const registerSelector = state => state.userReducer.register
export const loginSelector = state => state.userReducer.login
export const orderSelector = state => state.userReducer.order

// export actions
export const { logOutAccount } = userSlice.actions

export default userReducer