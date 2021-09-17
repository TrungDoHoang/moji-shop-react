import React, { useState } from 'react'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: 'Squishy MJ Momo duck nháy mắt 7cm',
            cost: 50000,
            quantity: 2,
            img: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20210716/21071018_XX_thumb.JPG'
        },
        {
            id: 2,
            name: 'Kẹp tài liệu A4 Rabbit gourmet 22x31',
            cost: 70000,
            quantity: 1,
            img: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20210716/21070015_XX_thumb.JPG'
        },
        {
            id: 3,
            name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
            cost: 25000,
            quantity: 1,
            img: 'https://storage.googleapis.com/cdn.nhanh.vn/store/7534/ps/20210716/21060014_xx_thumb.jpg'
        },

    ])

    return (
        <div className="header-cart">
            <span className="header-cart-icon material-icons-outlined">
                shopping_bag
            </span>
            <span className="header-cart-quantity d-flex justify-content-center align-items-center">3</span>
            {/* Cart no item: add class no-item */}
            <div className="header-cart-list">
                {/* No item */}
                <div className="list-no-item">
                    <img src="./assets/images/no-cart.png" alt="" className="header-cart-no-item-img" />
                    <span className="header-cart-no-item-msg">Chưa có sản phẩm</span>
                </div>
                {/* Has item */}
                <ul className="cart-list-item">
                    {items.map(item => {
                        return <CartItem key={item.id} name={item.name} cost={item.cost}
                            quantity={item.quantity} img={item.img} />
                    })}
                </ul>
                <div className="total d-flex flex-column">
                    <div className="d-flex justify-content-between py-4">
                        <span>Thành tiền:</span>
                        <div className="total-cost">{items.reduce((toltal, item) => {
                            return toltal + item.cost * item.quantity;
                        }, 0)}đ</div>
                    </div>
                    <div className="go-to-cart btn btn-pink">Xem giỏ hàng</div>
                </div>
            </div>
        </div>

    )
}

export default Cart
