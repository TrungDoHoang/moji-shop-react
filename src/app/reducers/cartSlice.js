import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsInCart: [
        ]
    },
    reducers: {
        getCart: (state,action) =>{
            let cartItem = sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []
            state.productsInCart = cartItem
        },
        addToCart: (state, action) => {
            const product = action.payload
            if(!state.productsInCart.find(item => item.id === product.id)) {
                state.productsInCart = [
                    product,
                    ...state.productsInCart
                ]
            }
            else{
                state.productsInCart.find(item => item.id === product.id).quantity += product.quantity
            }
            alert('Đã thêm ' + product.name + ' vào giỏ hàng!!')
            sessionStorage.setItem('cart', JSON.stringify(state.productsInCart))
        },
        deleteInCart: (state, action) => {
            const itemId = action.payload
            const quantities = state.productsInCart.find(item => item.id === itemId).quantity
            if(quantities > 1){
                state.productsInCart.find(item => item.id === itemId).quantity--
            }
            else {
                state.productsInCart = state.productsInCart.filter(item => item.id !== itemId)
            }
            sessionStorage.setItem('cart', JSON.stringify(state.productsInCart))
        }
    }
})
// export reducer
export const cartReducer = cartSlice.reducer

// export actions
export const {getCart, addToCart, deleteInCart} = cartSlice.actions

// export selecttor
export const cartSelector = state => state.cartReducer.productsInCart

export default cartReducer