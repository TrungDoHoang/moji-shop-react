import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartSelector, getCart } from '../../app/reducers/cartSlice'
import CartItem from './CartItem'
import './Cart.css'
import { Link } from 'react-router-dom'

function Cart() {
    const items = useSelector(cartSelector)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getCart())
    },[window.location])
    return (
        <div className="header-cart">
            <span className="header-cart-icon material-icons-outlined">
                shopping_bag
            </span>
            <span className={`header-cart-quantity justify-content-center align-items-center ${items.length !== 0 ? 'd-flex' : 'd-none'}`}>
                {items.length}
            </span>
            {/* Cart no item: add class no-item */}
            <div className={`header-cart-list ${items.length === 0 ? 'no-item' : ''}`}>
                {/* No item */}
                <div className="list-no-item">
                    <img src="/assets/images/no-cart.png" alt="" className="header-cart-no-item-img" />
                    <span className="header-cart-no-item-msg">Chưa có sản phẩm</span>
                </div>
                {/* Has item */}
                <ul className="cart-list-item">
                    {items.map(item => {
                        return <CartItem key={item.id} id={item.id} name={item.name} cost={item.cost}
                            quantity={item.quantity} img={item.img} />
                    })}
                </ul>
                <div className="total d-flex flex-column">
                    <div className="d-flex justify-content-between py-4">
                        <span>Thành tiền:</span>
                        <div className="total-cost">{(items.reduce((toltal, item) => {
                            return toltal + item.cost * item.quantity;
                        }, 0)).toLocaleString()}đ</div>
                    </div>
                    <Link to="/cart" className="go-to-cart btn btn-pink">Xem giỏ hàng</Link>
                </div>
            </div>
        </div>

    )
}

export default Cart
