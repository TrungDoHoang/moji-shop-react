import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

export const registerAPI = createAsyncThunk('user/register', (data) => {
    return axios({
        method: 'POST',
        url: 'http://localhost:8080/php/btlcnpm/api/account/register.php',
        data
    })
    .then((response) => response.data)
    .catch((error) => error.message)
})
export const loginAPI = createAsyncThunk('user/login', (data) => {
    return axios({
        method: 'POST',
        url: 'http://localhost:8080/php/btlcnpm/api/account/login.php',
        data
    })
    .then((response) => response.data)
    .catch((error) => error.message)
})
export const getUser = createAsyncThunk('user/getUser', () => {
    let token = localStorage.getItem('token') ? localStorage.getItem('token') : ""
    return axios.get(
        'http://localhost:8080/php/btlcnpm/api/account/user.php',
        { headers: {"Authorization" : `Bearer ${token}`} }
    )
    .then((response) => response.data)
    .catch((error) => error.message)
})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        register: {},
        login: {}
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
            if(data) {
                state.register = data
            }
        },
        [registerAPI.rejected]: (state, action) => {
            console.error('Truyền dữ liệu đăng ký không thành công!')
        },

        [loginAPI.fulfilled]: (state, action) => {
            let data = action.payload
            if(data){
                state.login = data
                if(data.code === 200){
                    localStorage.setItem('token', action.payload.token)
                }
            }
        },
        [loginAPI.rejected]: (state, action) => {
            console.error('Truyền dữ liệu đăng nhập không thành công!')
        },

        [getUser.fulfilled]: (state, action) => {
            let data = action.payload
            if(data){
                state.user = data
            }
        },
        [getUser.rejected]: (state, action) => {
            console.error('Truyền dữ liệu lấy thông tin người dùng không thành công!')
        },

    }
})

// export reducer
export const userReducer = userSlice.reducer

// export Selector
export const userSelector = state => state.userReducer.user
export const registerSelector = state => state.userReducer.register
export const loginSelector = state => state.userReducer.login

// export actions
export const { logOutAccount } = userSlice.actions

export default userReducer