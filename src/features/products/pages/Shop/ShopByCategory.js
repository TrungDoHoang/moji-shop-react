import { TweenMax } from 'gsap/gsap-core'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByCategory, productsByCategorySelector } from '../../../../app/reducers/productsSlice'
import $ from 'jquery'
import Category from '../../components/Category'
import CategoryMobile from '../../components/Category/CategoryMobile'
import NavProduct from '../../components/NavProduct'
// import Pagination from '../../components/Pagination'
import './Shop.css'
import ProductItem from '../../components/ProductItem'
import { bookCategorySelector, toolCategorySelector } from '../../../../app/reducers/categorySlice'
import { useQueryParam, StringParam } from 'use-query-params'
import { useHistory } from 'react-router'


export default function ShopByCategory() {
    const products = useSelector(productsByCategorySelector)
    const bookCategory = useSelector(bookCategorySelector) 
    const toolCategory = useSelector(toolCategorySelector) 
    const Err404 = React.lazy(() => import('../../../../components/404'))
    const [categoryId, setCategoryId] = useQueryParam('category', StringParam)
    const location = useHistory()

    const bookCategoryName = bookCategory.find(book => book.id === categoryId) 
    const toolCategoryName = toolCategory.find(tool => tool.id === categoryId) 
    let categoryName 
    if(bookCategoryName){
        categoryName = bookCategoryName.name
    } else if(toolCategoryName){
        categoryName = toolCategoryName.name
    }
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(filterByCategory(categoryId))
        window.scrollTo(0, 0)
    },[location.location])

    const loadProductsEffect = useRef(() => {
        TweenMax.staggerFrom(
            $('.product'), // phần tử được chọn
            1, // thời gian chuyển động
            { top: 100, opacity: 0 },
            0.2 // thời gian cách nhau giữa mỗi hiệu ứng
        )
    })
    if(categoryName){
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
                            <div className="row g-4 mt-0">
                                {products.map(product => {
                                    return <ProductItem key={product.id} id={product.id} name={product.name}
                                        cost={product.cost} img={product.img} />
                                })}
                                {/* <Pagination /> */}
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
