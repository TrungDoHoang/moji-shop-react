import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {useQueryParam, NumberParam } from 'use-query-params'
import $ from 'jquery'
import './Detail.css'
import { useSelector, useDispatch } from 'react-redux';
import {addToCart} from '../../../../app/reducers/cartSlice'
import { productsSelector } from '../../../../app/reducers/productsSlice';

export default function Detail() {
    const Err404 = React.lazy(() => import('../../../../components/404'))
    const [id, setId] = useQueryParam('id', NumberParam);
    
    const products = useSelector(productsSelector) 
    const dispatch = useDispatch()

    useEffect(() => {
        $('input[type=radio][name=color]').change(function() {
            let [name, ...last] = $('#name').text().split('-')
            last = $('input[type=radio][name=color]:checked').val()
            $('#name').text([name, last].join('-'))
            // $('#name').text(`${name}-${$('input[type=radio][name=color]:checked').val()}`)
        })
        $('input[name=quantity][type=number]').blur(function() {
            let val = $(this).val()
            if(val < 1){
                alert('Số lượng mua tối thiểu là 1')
                $(this).val(1)
            } 
        })
        window.scrollTo(0, 0)
    },[])

    const product = products.find(item => item.id === id)
    const addItemToCart = e => {
        e.preventDefault()
        if(Number.parseInt($('#quantity').val()) > 0){
            const item = {
                ...product,
                quantity: Number.parseInt($('#quantity').val())
            }
            dispatch(addToCart(item))
        }
        window.scrollTo(0, 0)
    }
    if(product){
        return (
            <div className="container text-center">
                <div className="row">
                    <div className="main mt-5 mb-5">
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/" className="header__link text-decoration-none">Trang chủ</Link></li>
                                <li className="breadcrumb-item"><Link to="/shop" className="header__link text-decoration-none">Dụng
                                    cụ học tập</Link></li>
                                <li className="breadcrumb-item active">{product.name}</li>
                            </ul>
                        </nav>
                        <div className="col-12">
                            <div className="product-details row g-5">
                                <img className="img-product-details col-lg-6 col-md-12 col-12" src={`/assets/images/product/${product.img}`} alt="" />
                                <div className="product-details-information d-flex flex-column col-lg-6 col-md-12 col-12">
                                    <div className="name-product-details d-flex align-items-start text-start w-100">
                                        <p id="name">{product.name}</p>
                                        <div className="share ms-auto d-flex align-items-center">
                                            <span className="material-icons-outlined">
                                                share
                                            </span>
                                            <div className="share-to d-flex align-items-center">
                                                Chia sẻ đến:
                                                <a href="https://www.facebook.com/"
                                                    target="_blank" rel="noreferrer noopener"
                                                    className="d-flex align-items-center">
                                                    <ion-icon name="logo-facebook" className="f-b" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="favorite d-flex align-items-center ms-2">
                                            <ion-icon name="heart-outline" className="heart-border" />
                                            <ion-icon name="heart" className="heart" />
                                        </div>
                                    </div>
                                    <div className="product-details-id text-start">
                                        Mã sản phẩm: {product.id}
                                    </div>
                                    <div className="product-details-cost text-start">
                                        {(product.cost).toLocaleString()}đ
                                    </div>
                                    <form onSubmit={addItemToCart} className="product-details-form text-start">
                                        <div className="form-check-color d-flex align-items-center">
                                            <label> Màu sắc:</label>
                                            <input type="radio" defaultValue="Đen" title="Đen" name="color" style={{ backgroundColor: '#000' }} />
                                            <input type="radio" defaultValue="Trắng" title="Trắng" name="color" style={{ backgroundColor: '#fff' }} />
                                        </div>
                                        <div className="form-check-quantity d-flex align-items-center w-50">
                                            <label htmlFor="quantity" className="w-50"> Số lượng: </label>
                                            <input type="number" name="quantity" min={1} defaultValue={1} id="quantity" className="form-control me-auto" />
                                        </div>
                                        <button className="btn btn-pink mt-4">Thêm vào giỏ hàng</button>
                                    </form>
                                    <div className="row g-4 mt-5">
                                        <div className="shipping col-lg-4 col-md-6 col-12 text-start d-flex align-items-center">
                                            <span className="material-icons-outlined">
                                                local_shipping
                                            </span>
                                            Giao hàng toàn quốc đơn hàng từ 100k
                                        </div>
                                        <div className="shipping col-lg-4 col-md-6 col-12 text-start d-flex align-items-center">
                                            <span className="material-icons-outlined">
                                                monetization_on
                                            </span>
                                            COD nội thành HN, HCM
                                        </div>
                                        <div className="shipping col-lg-4 col-md-6 col-12 text-start d-flex align-items-center">
                                            <span className="material-icons-outlined">
                                                published_with_changes
                                            </span>
                                            Đổi trả trong 24h
                                        </div>
                                        <div className="shipping col-12 text-start d-flex align-items-center">
                                            <span className="material-icons-outlined">
                                                local_shipping
                                            </span>
                                            Freeship cho đơn hàng từ 150k nội thành HN <br />
                                            Hỗ trợ ship 30k cho đơn hàng từ 500k toàn quốc
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
    
        )
    }
    return(
        <Err404 />
    )
}
