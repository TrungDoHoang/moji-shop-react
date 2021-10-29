import { TweenMax } from 'gsap/gsap-core'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, productsSelector } from '../../../../app/reducers/productsSlice'
import $ from 'jquery'
import Category from '../../components/Category'
import CategoryMobile from '../../components/Category/CategoryMobile'
import NavProduct from '../../components/NavProduct'
import Pagination from '../../components/Pagination'
import './Shop.css'
import ProductItem from '../../components/ProductItem'
import { useQueryParam, NumberParam } from 'use-query-params'
import { useHistory } from 'react-router'


export default function Shop() {
    const products = useSelector(productsSelector)
    const dispatch = useDispatch()
    if(products.length === 0){
        throw dispatch(getProducts())
    }
    // const [page, setPage] = useQueryParam('_page', NumberParam)
    // const location = useHistory()
    // let currentPage =  page || 1  && page < 5 ? page : 1
    // console.log(currentPage)

    // useEffect(()=> {
    // },[location.location])
    
    // if(products){
    //     console.log(currentPage)
    // }
    const loadProductsEffect = useRef(() => {
        let product = $(".shop > .col-lg-3.col-md-4.col-6")
        product.hide()
        product.slice(0, 8).show()
        if ($(".shop > .col-lg-3.col-md-4.col-6:hidden").length === 0) {
            $(".new-products-more").hide();
        }
        TweenMax.staggerFrom(
            $('.product'), // phần tử được chọn
            1, // thời gian chuyển động
            { top: 100, opacity: 0 },
            0.2 // thời gian cách nhau giữa mỗi hiệu ứng
        )
    })
    const more = () => {
        $(".shop > .col-lg-3.col-md-4.col-6:hidden").slice(0, 4).slideDown();
        if ($(".shop > .col-lg-3.col-md-4.col-6:hidden").length === 0) {
            $(".new-products-more").fadeOut('slow');
        }
    }

    window.onload = function() {
        window.scrollTo(0, 0)
    }
    window.scrollTo(0, 0)
    document.title = 'Shop'
    return (
        <div className="main" ref={loadProductsEffect.current}>
            <div className="container">
                <div className="row mt-5 gx-5">
                    <div className="col-lg-3 d-lg-block d-none">
                        <Category />
                    </div>
                    {/* Categogy- mobile */}
                    <CategoryMobile />
                    <div className="col-lg-9 col-12 col-md-11">
                        <NavProduct title="Tất cả sản phẩm" />
                        <div className="shop row g-4 mt-0">
                            {products.map(product => {
                                return <ProductItem key={product.id} id={product.id} name={product.name}
                                    cost={product.cost} img={product.img} SoLuong={product.SoLuong}/>
                            })}
                            {/* <Pagination /> */}
                        </div>
                        <div className="col-12 text-center mt-5">
                            <div className="btn btn-pink new-products-more" onClick={more}>Xem thêm</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
