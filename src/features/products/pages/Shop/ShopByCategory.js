import { TweenMax } from 'gsap/gsap-core'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { minMaxSelector, productsByCat, productsByCategorySelector } from '../../../../app/reducers/productsSlice'
import $ from 'jquery'
import Category from '../../components/Category'
import CategoryMobile from '../../components/Category/CategoryMobile'
import NavProduct from '../../components/NavProduct'
import './Shop.css'
import { allCategorySelector } from '../../../../app/reducers/categorySlice'
import { useQueryParam, StringParam } from 'use-query-params'
import { useHistory } from 'react-router'
import PaginatedItems from '../../components/PaginatedItems'


export default function ShopByCategory() {
    let products = useSelector(productsByCategorySelector)
    const categories = useSelector(allCategorySelector)
    const Err404 = React.lazy(() => import('../../../../components/404'))
    const [categorySlug, setCategorySlug] = useQueryParam('category', StringParam)
    const location = useHistory()

    let category = (categories.find(prd => prd.TenVanTat === categorySlug))
    let categoryName = category ? category.TenChuDe : ''

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productsByCat({slug: categorySlug}))
        window.scrollTo(0, 0)
    }, [location.location])
    // if (products.length === 0) {
    //     throw dispatch(productsByCat(categorySlug))
    // }
    const minmax = useSelector(minMaxSelector)
    useEffect(()=> {
        if(minmax.length > 0)
            dispatch(productsByCat({ slug: categorySlug, from: minmax[0], to: minmax[1]}))
    },[minmax])
    
    const loadProductsEffect = useRef(() => {
        TweenMax.staggerFrom(
            $('.product'), // phần tử được chọn
            1, // thời gian chuyển động
            { top: 100, opacity: 0 },
            0.2 // thời gian cách nhau giữa mỗi hiệu ứng
            )
        })
        if (categoryName && products.length > 0) {
            document.title = categoryName
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
                            <NavProduct title={categoryName} />
                            <div className="filter row g-4 mt-0">
                                <PaginatedItems itemsPerPage={8} items={products}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Err404 />
    )
}
