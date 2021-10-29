import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { destroyItem, updateCart } from '../../../../app/reducers/cartSlice'
import $ from 'jquery'

export default function TableCartItem({ id, name, cost, quantity, img, soluong, read }) {
    const dispatch = useDispatch()
    const deleteSignItem = (id) => {
        dispatch(destroyItem(id))
    }

    const [quantityInput, setQuantityInput] = useState('')

    useEffect(() => {
        setQuantityInput(quantity)
    }, [])

    const quantityRequired = e => {
        let val = $(e.target).val()
        if (val < 1) {
            alert('Số lượng mua tối thiểu là 1')
            $(e.target).val(1)
            val = 1
        }
        if (val > soluong) {
            alert('Số lượng mua tối thiểu là ' + soluong)
            $(e.target).val(soluong)
            val = soluong
        }
        if (val > 0 && val <= soluong) {
            const item = {
                id,
                quantity: val
            }
            dispatch(updateCart(item))
        }
    }
    const updateToCart = e => {
        e.preventDefault()
        $('input').blur()
        // const item = {
        //     id,
        //     quantity: quantityInput
        // }
        // dispatch(updateCart(item))
    }
    return (
        <tr className="table-cart-item">
            <td>
                <Link to={`/detail/products?id=${id}`} className="cart-item-name text-decoration-none">
                    <img src={`/assets/images/product/${img}`} alt={name} className="cart-item-img" />
                </Link>
            </td>
            <td>
                <Link to={`/detail/products?id=${id}`} title={name} className="cart-item-name text-decoration-none">{name}</Link>
            </td>
            <td>
                <span className="cart-item-cost">{cost.toLocaleString()}đ</span>
            </td>
            <td>
                <form id="formUpdate" onSubmit={updateToCart}>
                    {
                        read ?
                            <input type="number" name="quantity" value={quantityInput}
                                onChange={e => { setQuantityInput(e.target.value) }} onBlur={quantityRequired} readOnly />
                            :
                            <input type="number" name="quantity" value={quantityInput}
                                onChange={e => { setQuantityInput(e.target.value) }} onBlur={quantityRequired} />
                    }
                </form>
            </td>
            {
                read ?
                    <td colSpan="2">
                        <span className="cart-item-cost">{(cost * quantity).toLocaleString()}đ</span>
                    </td>
                    : <>
                        <td>
                            <span className="cart-item-cost">{(cost * quantity).toLocaleString()}đ</span>
                        </td>
                        <td>
                            <button className="cart-item-delete">
                                <span className=" material-icons-outlined" onClick={deleteSignItem.bind(this, id)} >
                                    delete
                                </span>
                            </button>
                        </td>
                    </>
            }
        </tr>
    )
}
