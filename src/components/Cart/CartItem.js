import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteInCart } from '../../app/reducers/cartSlice'

function CartItem({ id, name, cost, quantity, img }) {
    const dispatch = useDispatch()
    const deleteSignItem = (id) => {
        dispatch(deleteInCart(id))
    }
    return (
        <li className="cart-item">
            <Link to={`/detail/products?id=${id}`} className="cart-item-name text-decoration-none">
                <img src={`/assets/images/product/${img}`} alt="" className="cart-item-img" />
            </Link>
            <div className="d-flex flex-column ms-4 justify-content-between">
                <Link to={`/detail/products?id=${id}`} title={name} className="cart-item-name text-decoration-none">{name}</Link>
                <span className="cart-item-cost">Đơn giá: {cost.toLocaleString()}đ</span>
            </div>
            <div className="d-flex flex-column ms-4 justify-content-center align-items-center">
                <span className="cart-item-quantity">x{quantity}</span>
                <button className="cart-item-delete">
                    <span className=" material-icons-outlined" onClick={deleteSignItem.bind(this, id)} >
                        delete
                    </span>

                </button>
            </div>
        </li>

    )
}

export default CartItem
