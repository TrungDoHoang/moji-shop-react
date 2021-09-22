import { TweenMax } from 'gsap/gsap-core'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { productsSelector } from '../../../../app/reducers/productsSlice'
import $ from 'jquery'
import Category from '../../components/Category'
import CategoryMobile from '../../components/Category/CategoryMobile'
import NavProduct from '../../components/NavProduct'
import Pagination from '../../components/Pagination'
import './Shop.css'
import ProductItem from '../../components/ProductItem'


export default function Shop() {
    const products = useSelector(productsSelector)
    // const dispatch = useDispatch()

    const loadProductsEffect = useRef(() => {
        TweenMax.staggerFrom(
            $('.product'), // phần tử được chọn
            1, // thời gian chuyển động
            { top: 100, opacity: 0 },
            0.2 // thời gian cách nhau giữa mỗi hiệu ứng
        )
    })
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
                        <div className="row g-4 mt-0">
                            {products.map(product => {
                                return <ProductItem key={product.id} id={product.id} name={product.name}
                                    cost={product.cost} img={product.img} />
                            })}
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
