import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../../../app/reducers/cartSlice'

export default function ProductItem(props) {
    const dispatch = useDispatch()
    const addItemToCart = item => {
        item = {
            ...item,
            quantity: 1,
        }
        dispatch(addToCart(item))
        // console.log(item)
    }
    return (
        <div className="col-lg-3 col-md-4 col-6">
            <div className="product">
                <div className="product-img">
                    <Link to={`/detail/products?id=${props.id}`} className="text-decoration-none d-block" title={props.name}>
                        <img src={`/assets/images/product/${props.img}`} alt={props.name}/>
                    </Link>
                    <div className="product-action">
                        <span className="material-icons-outlined">
                            favorite_border
                        </span>
                        <span className="d-none material-icons-outlined">
                            favorite
                        </span>
                        <span className="material-icons-outlined" onClick={addItemToCart.bind(this, props)}>
                            medical_services
                        </span>
                        <span className="d-none material-icons-outlined">
                            work
                        </span>
                    </div>
                </div>
                <Link to={`/detail/products?id=${props.id}`} className="text-decoration-none" title={props.name}>
                    <h4 className="product-name">{props.name}</h4>
                </Link>
                <p className="product-cost">{props.cost}đ</p>
            </div>
        </div>
    )
}
