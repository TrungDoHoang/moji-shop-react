import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../../../app/reducers/cartSlice'
import Swal from 'sweetalert2'

export default function ProductItem(props) {
    const dispatch = useDispatch()
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
    const addItemToCart = item => {
        if(props.SoLuong > 0 ) {
            item = {
                ...item,
                quantity: 1,
            }
            dispatch(addToCart(item))
            Toast.fire({
                icon: 'success',
                title: '<h3>Đã thêm ' + props.name + ' vào giỏ hàng!!</h3>',
            })
        }
        else{
            Swal.fire('<h1>Thông báo!</h1>', '<h1> Sản phẩm hiện đang hết hàng, vui lòng quay lại sau! </h1>', 'warning')
        }
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
                        {/* <span className="material-icons-outlined">
                            favorite_border
                        </span>
                        <span className="d-none material-icons-outlined">
                            favorite
                        </span> */}
                        <span className="material-icons-outlined" onClick={addItemToCart.bind(this, props)}>
                            shopping_cart
                        </span>
                        <span className="d-none material-icons-outlined">
                            work
                        </span>
                    </div>
                </div>
                <Link to={`/detail/products?id=${props.id}`} className="text-decoration-none" title={props.name}>
                    <h4 className="product-name">{props.name}</h4>
                </Link>
                <p className="product-cost">{(props.cost).toLocaleString()}đ</p>
            </div>
        </div>
    )
}
