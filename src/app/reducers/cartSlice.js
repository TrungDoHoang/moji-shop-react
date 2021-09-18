import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsInCart: [
            // {
            //     id: 1,
            //     name: 'Squishy MJ Momo duck nháy mắt 7cm',
            //     cost: 50000,
            //     quantity: 2,
            //     img: '21071018_XX_thumb.JPG'
            // },
            // {
            //     id: 10,
            //     name: 'Kẹp tài liệu A4 Rabbit gourmet 22x31',
            //     cost: 70000,
            //     quantity: 1,
            //     img: '20091002_XX_thumb_450x450.JPG'
            // },
            // {
            //     id: 6,
            //     name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
            //     cost: 70000,
            //     quantity: 1,
            //     img: '21060014_xx_thumb.jpg'
            // },
    
        ]
    },
    reducers: {
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
            alert('Đã thêm vào giỏ hàng!!')
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
        }
    }
})
// export reducer
export const cartReducer = cartSlice.reducer

// export actions
export const {addToCart, deleteInCart} = cartSlice.actions

// export selecttor
export const cartSelector = state => state.cartReducer.productsInCart

export default cartReducer