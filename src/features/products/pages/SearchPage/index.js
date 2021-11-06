import { TweenMax } from 'gsap'
import React, { Suspense, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productSearch, productsSearchSelector } from '../../../../app/reducers/productsSlice'
import ProductItem from '../../components/ProductItem'
import $ from 'jquery'
import { useQueryParam, StringParam } from 'use-query-params'
import { useHistory } from 'react-router'
import Err404 from '../../../../components/404'
import PaginatedItems from '../../components/PaginatedItems'

export default function SearchPage() {
    let products = useSelector(productsSearchSelector)
    const dispatch = useDispatch()
    const location = useHistory()
    const [keySearch, setKeySearch] = useQueryParam('key', StringParam);
    useEffect(() => {
        if (keySearch) {
            dispatch(productSearch(keySearch))
        }
        let product = $(".searchItem > .col-lg-3.col-md-4.col-6")
        product.hide()
        product.slice(0, 8).show()
        if ($(".searchItem > .col-lg-3.col-md-4.col-6:hidden").length === 0) {
            $(".new-products-more").hide();
        }
    }, [location.location])

    if (products.length === 0) {
        throw dispatch(productSearch(keySearch))
    }
    const ref = useRef(() => {
        let product = $(".searchItem > .col-lg-3.col-md-4.col-6")
        product.hide()
        product.slice(0, 8).show()
        if ($(".searchItem > .col-lg-3.col-md-4.col-6:hidden").length === 0) {
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
        $(".searchItem > .col-lg-3.col-md-4.col-6:hidden").slice(0, 4).slideDown();
        if ($(".searchItem > .col-lg-3.col-md-4.col-6:hidden").length === 0) {
            $(".new-products-more").fadeOut('slow');
        }
    }


    document.title = 'Kết quả tìm kiếm theo: ' + keySearch
    if (products.length > 0 && keySearch) {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div className="main" ref={ref.current}>
                    <div className="container">
                        <div className="new-products mt-5 mb-5">
                            <h2 to="/shop" className="new-products-heading text-decoration-none">Kết quả tìm kiếm theo: {keySearch}</h2>
                        </div>
                        <div className="searchItem row g-5 mt-5">
                            <PaginatedItems itemsPerPage={8} items={products} />
                        </div>
                        <div className="col-12 text-center mt-5">
                            <div className="btn btn-pink new-products-more" onClick={more}>Xem thêm</div>
                        </div>
                    </div>
                </div>
            </Suspense>
        )
    }
    else {
        return (
            <Err404 />
        )
    }
}
