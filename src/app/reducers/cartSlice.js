import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../axios'

export const payBill = createAsyncThunk('cart/payBill', (data) => {
    return API({
        method: 'POST',
        url: 'bill/create.php',
        data
    })
        .then((response) => response.data)
        .catch(err => err.message)
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsInCart: [
        ]
    },
    reducers: {
        getCart: (state, action) => {
            let cartItem = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

            state.productsInCart = cartItem.map(item => {
                    return {
                        ...item,
                        cost: Number.parseInt(item.cost),
                        SoLuong: Number.parseInt(item.SoLuong),
                        quantity: Number.parseInt(item.quantity)
                    }
                })
        },
        addToCart: (state, action) => {
            const product = action.payload
            if (!state.productsInCart.find(item => item.id === product.id)) {
                state.productsInCart = [
                    product,
                    ...state.productsInCart
                ]
            }
            else {
                state.productsInCart.find(item => item.id === product.id).quantity += product.quantity
            }
            alert('Đã thêm ' + product.name + ' vào giỏ hàng!!')
            localStorage.setItem('cart', JSON.stringify(state.productsInCart))
        },
        updateCart: (state, action) => {
            const product = action.payload
            state.productsInCart.find(item => item.id === product.id).quantity = product.quantity
            localStorage.setItem('cart', JSON.stringify(state.productsInCart))
        },

        deleteInCart: (state, action) => {
            const itemId = action.payload
            const quantities = state.productsInCart.find(item => item.id === itemId).quantity
            if (quantities > 1) {
                state.productsInCart.find(item => item.id === itemId).quantity--
            }
            else {
                state.productsInCart = state.productsInCart.filter(item => item.id !== itemId)
            }
            localStorage.setItem('cart', JSON.stringify(state.productsInCart))
        },
        destroyItem: (state, action) => {
            const itemId = action.payload
            state.productsInCart = state.productsInCart.filter(item => item.id !== itemId)
        }
    },
    extraReducers: {
        [payBill.fulfilled]: (state, action) => {
            state.productsInCart = []
            localStorage.setItem('cart', JSON.stringify(state.productsInCart))
        },
        [payBill.rejected]: (state, action) => {
            console.error("Đặt hàng thất bại, server không phản hồi!")
        }
    }
})
// export reducer
export const cartReducer = cartSlice.reducer

// export actions
export const { getCart, addToCart, updateCart, deleteInCart, destroyItem } = cartSlice.actions

// export selecttor
export const cartSelector = state => state.cartReducer.productsInCart

export default cartReducer