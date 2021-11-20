import React, { useEffect, useRef } from 'react'
import { getProducts, productsSelector } from '../../../app/reducers/productsSlice'
import { getUser } from '../../../app/reducers/userSlice'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import MultiCarousel from '../components/MultiCarousel'
import ProductItem from '../components/ProductItem';
import SlideGroup from '../components/SlideGroup'
import { TweenMax } from 'gsap'
import $ from 'jquery'

export default function Home() {
    const products = useSelector(productsSelector)
    const dispatch = useDispatch()
    const location = useHistory()
    if(products.length === 0){
        throw dispatch(getProducts())
    }

    useEffect(()=> {
        dispatch(getUser()).unwrap()
            .then(res => {
                if(res.user){
                    if(res.user.MaNV !== "0"){
                        location.replace('/admin')
                    }
                }
            })
    },[location.location])

    const newProducts = products.reduce((newArr, product) => {
        newArr.unshift(product)
        return newArr
    },[])

    const loadProductsEffect = useRef(() => {
        let product = $(".new-products > .col-lg-3.col-md-4.col-6")
        product.hide()
        product.slice(0, 8).show()
        TweenMax.staggerFrom(
            $('.col-lg-3.col-md-4.col-6').not(':hidden'), // phần tử được chọn
            1, // thời gian chuyển động
            { top: 100, opacity: 0 },
            0.2 // thời gian cách nhau giữa mỗi hiệu ứng
        )
    })
    const more = () => {
        $(".new-products > .col-lg-3.col-md-4.col-6:hidden").slice(0, 4).slideDown();
        if ($(".new-products > .col-lg-3.col-md-4.col-6:hidden").length === 0) {
            $(".new-products-more").fadeOut('slow');
        }
    }
    window.onload = function() {
        window.scrollTo(0, 0)
    }
    window.scrollTo(0, 0)
    document.title = 'Moji Shop'

    return (
        <>
            <SlideGroup />
            <div className="main" ref={loadProductsEffect.current}>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="mt-5 mb-5">
                                <Link to="/shop" className="new-products-heading text-decoration-none">Sản phẩm mới</Link>
                            </div>
                            <div className="new-products row g-md-4 g-lg-5">
                                {newProducts.map(newProduct => {
                                    return <ProductItem key={newProduct.id} id={newProduct.id} name={newProduct.name}
                                        cost={newProduct.cost} img={newProduct.img} SoLuong={newProduct.SoLuong}/>
                                })}
                                <div className="col-12 text-center">
                                    <div className="btn btn-pink new-products-more" onClick={more}>Xem thêm</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <div className="row mt-5">
                        <div className="col-12">
                            <div className="new-products mt-5 mb-5">
                                <Link to="/shop" className="new-products-heading text-decoration-none">Chủ đề mới</Link>
                            </div>
                            <div className="row g-md-4 g-lg-5">
                                {newProducts.slice(0, 3).map(newProduct => {
                                    return <ProductItem key={newProduct.id} id={newProduct.id} name={newProduct.name}
                                        cost={newProduct.cost} img={newProduct.img} SoLuong={newProduct.SoLuong}/>
                                })}
                                <div className="col-12 text-center">
                                    <Link to="/shop" className="btn btn-pink">Xem thêm</Link>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <MultiCarousel />
        </>
    )
}
