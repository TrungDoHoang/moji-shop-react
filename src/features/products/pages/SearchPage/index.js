import { TweenMax } from 'gsap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsSearchSelector, searchProducts } from '../../../../app/reducers/productsSlice'
import Pagination from '../../components/Pagination'
import ProductItem from '../../components/ProductItem'
import $ from 'jquery'
import { useQueryParam, StringParam } from 'use-query-params'
import { useHistory } from 'react-router'
import Err404 from '../../../../components/404'

export default function SearchPage() {
    const products = useSelector(productsSearchSelector)
    const dispatch = useDispatch()
    const location = useHistory()
    const [keySearch, setKeySearch] = useQueryParam('key', StringParam);
    useEffect(()=>{
        if(keySearch){
            dispatch(searchProducts(keySearch))  
            TweenMax.staggerFrom(
                $('.product'), // phần tử được chọn
                1, // thời gian chuyển động
                { top: 100, opacity: 0 },
                0.2 // thời gian cách nhau giữa mỗi hiệu ứng
            )
        }
    },[location.location])

    document.title = 'Kết quả tìm kiếm theo: ' + keySearch
    if(products.length > 0 && keySearch){
        return (
            <div className="main">
                <div className="container">
                    <div className="new-products mt-5 mb-5">
                        <h2 to="/shop" className="new-products-heading text-decoration-none">Kết quả tìm kiếm theo: {keySearch}</h2>
                    </div>
                    <div className="row g-5 mt-5">
                        {products.map(product => {
                            return <ProductItem key={product.id} id={product.id} name={product.name}
                                cost={product.cost} img={product.img} />
                        })}
                        <Pagination />
                    </div>
                </div>
            </div>
    
        )
    }
    else {
        return (
            <Err404 />
        )
    }
}
