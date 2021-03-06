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
            console.error('Truy???n d??? li???u ????ng k?? kh??ng th??nh c??ng!')
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
            console.error('Truy???n d??? li???u ????ng nh???p kh??ng th??nh c??ng!')
        },

        [getUser.fulfilled]: (state, action) => {
            let data = action.payload
            if (data && data.status === 200) {
                state.user = data.user
            }
        },
        [getUser.rejected]: (state, action) => {
            console.error('Truy???n d??? li???u l???y th??ng tin ng?????i d??ng kh??ng th??nh c??ng!')
        },

        [updateAPI.rejected]: (state, action) => {
            console.error('Truy???n d??? li???u update th??ng tin ng?????i d??ng kh??ng th??nh c??ng!')
        },

        [changePassAPI.rejected]: (state, action) => {
            console.error('Truy???n d??? li???u thay ?????i m???t kh???u ng?????i d??ng kh??ng th??nh c??ng!')
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
            console.error('Truy???n d??? li???u l???y danh s??ch ????n h??ng kh??ng th??nh c??ng!')
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