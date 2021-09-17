import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MultiCarousel from '../components/MultiCarousel'
import ProductItem from '../components/ProductItem';
import SlideGroup from '../components/SlideGroup'
import { TweenMax } from 'gsap'
import $ from 'jquery'

export default function Home() {
    const [newProducts, setNewProducts] = useState([
        {
            id: 1,
            name: 'Squishy MJ Momo duck nháy mắt 7cm',
            cost: 50000,
            img: '21071018_XX_thumb.JPG'
        },
        {
            id: 2,
            name: 'Sổ vở kế hoạch Monthly Thỏ Bunny flowers 7x9',
            cost: 50000,
            img: '20091002_XX_thumb_450x450.JPG'
        },
        {
            id: 3,
            name: 'Sổ vở B5 MJ Cat meow holiday',
            cost: 25000,
            img: '20112228_XX_thumb_450x450.JPG'
        },
        {
            id: 4,
            name: 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang',
            cost: 54000,
            img: '21012339_XX_thumb_450x450.JPG'
        },
        {
            id: 5,
            name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
            cost: 50000,
            img: '21052103_XX_thumb_450x450.jpg'
        },
        {
            id: 6,
            name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
            cost: 70000,
            img: '21060014_xx_thumb.jpg'
        },
        {
            id: 7,
            name: 'Sổ vở B5 MJ Retro film',
            cost: 40000,
            img: '21070013_XX_thumb.JPG'
        },
        {
            id: 8,
            name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
            cost: 35000,
            img: '21070014_XX_thumb.JPG'
        },
        {
            id: 9,
            name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
            cost: 50000,
            img: '21052103_XX_thumb_450x450.jpg'
        },
        {
            id: 10,
            name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
            cost: 70000,
            img: '21060014_xx_thumb.jpg'
        },
        {
            id: 11,
            name: 'Sổ vở B5 MJ Retro film',
            cost: 40000,
            img: '21070013_XX_thumb.JPG'
        },
        {
            id: 12,
            name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
            cost: 35000,
            img: '21070014_XX_thumb.JPG'
        },

    ])

    useEffect(() => {
        TweenMax.staggerFrom(
            $('.product'), // phần tử được chọn
            1, // thời gian chuyển động
            { top: 100, opacity: 0 },
            0.2 // thời gian cách nhau giữa mỗi hiệu ứng
        )
    })

    const more = () => {
        $('.more').css('display', 'flex')
        $('.new-products-more').hide()
    }

    return (
        <>
            <SlideGroup />
            <div className="main">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="new-products mt-5 mb-5">
                                <Link to="/shop" className="new-products-heading text-decoration-none">Sản phẩm mới</Link>
                            </div>
                            <div className="row g-5">
                                {newProducts.map(newProduct => {
                                    return <ProductItem key={newProduct.id} id={newProduct.id} name={newProduct.name}
                                        cost={newProduct.cost} img={newProduct.img} />
                                })}
                                <div className="col-12 text-center">
                                    <div className="btn btn-pink new-products-more" onClick={more}>Xem thêm</div>
                                </div>
                            </div>
                            <div className="row g-5 more">
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
                            <div className="row g-5">
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
