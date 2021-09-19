import React, { useEffect, useRef } from 'react'
import { productsSelector } from '../../../app/reducers/productsSlice'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MultiCarousel from '../components/MultiCarousel'
import ProductItem from '../components/ProductItem';
import SlideGroup from '../components/SlideGroup'
import { TweenMax } from 'gsap'
import $ from 'jquery'

export default function Home() {
    const products = useSelector(productsSelector)
    const newProducts = products.reduce((newArr, product) => {
        newArr.unshift(product)
        return newArr
    }, [])

    const loadProductsEffect = useRef(() => {
        TweenMax.staggerFrom(
            $('.product'), // phần tử được chọn
            1, // thời gian chuyển động
            { top: 100, opacity: 0 },
            0.2 // thời gian cách nhau giữa mỗi hiệu ứng
        )
    })
    useEffect(()=> {
        window.scrollTo(0, 0)
    })
    document.title = 'Moji Shop'
    const more = () => {
        $('.more').css('display', 'flex')
        $('.new-products-more').hide()
    }

    return (
        <>
            <SlideGroup />
            <div className="main" ref={loadProductsEffect.current}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="new-products mt-5 mb-5">
                                <Link to="/shop" className="new-products-heading text-decoration-none">Sản phẩm mới</Link>
                            </div>
                            <div className="row g-md-4 g-lg-5">
                                {newProducts.map(newProduct => {
                                    return <ProductItem key={newProduct.id} id={newProduct.id} name={newProduct.name}
                                        cost={newProduct.cost} img={newProduct.img} />
                                })}
                                <div className="col-12 text-center">
                                    <div className="btn btn-pink new-products-more" onClick={more}>Xem thêm</div>
                                </div>
                            </div>
                            <div className="row g-md-4 g-lg-5 more">
                                {newProducts.slice(0, 8).map(newProduct => {
                                    return <ProductItem key={newProduct.id} id={newProduct.id} name={newProduct.name}
                                        cost={newProduct.cost} img={newProduct.img} />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="new-products mt-5 mb-5">
                                <Link to="/shop" className="new-products-heading text-decoration-none">Chủ đề mới</Link>
                            </div>
                            <div className="row g-md-4 g-lg-5">
                                {newProducts.slice(0, 3).map(newProduct => {
                                    return <ProductItem key={newProduct.id} id={newProduct.id} name={newProduct.name}
                                        cost={newProduct.cost} img={newProduct.img} />
                                })}
                                <div className="col-12 text-center">
                                    <Link to="/shop" className="btn btn-pink">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MultiCarousel />
        </>
    )
}
