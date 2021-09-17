import { TweenMax } from 'gsap/gsap-core'
import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Category from '../../components/Category'
import CategoryMobile from '../../components/Category/CategoryMobile'
import NavProduct from '../../components/NavProduct'
import Pagination from '../../components/Pagination'
import './Shop.css'
import ProductItem from '../../components/ProductItem'


export default function Shop() {
    const [products, setProducts] = useState([
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
        {
            id: 13,
            name: 'Sổ vở MZHS Daisy duck have a nice day 17x24 200 trang',
            cost: 54000,
            img: '21012339_XX_thumb_450x450.JPG'
        },
        {
            id: 14,
            name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
            cost: 50000,
            img: '21052103_XX_thumb_450x450.jpg'
        },
        {
            id: 15,
            name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
            cost: 70000,
            img: '21060014_xx_thumb.jpg'
        },
        {
            id: 16,
            name: 'Sổ vở B5 MJ Retro film',
            cost: 40000,
            img: '21070013_XX_thumb.JPG'
        },
        {
            id: 17,
            name: 'Sổ vở B5 MJ Jellycat bartholomew baby bear',
            cost: 35000,
            img: '21070014_XX_thumb.JPG'
        },
        {
            id: 18,
            name: 'Sổ vở giấy kiểm tra dòng kẻ ô ly MZ We bare bears Ice bear math 16x21 20 tờ',
            cost: 50000,
            img: '21052103_XX_thumb_450x450.jpg'
        },
        {
            id: 19,
            name: 'Sổ vở A5 MJ Little girl sweet mango fruit',
            cost: 70000,
            img: '21060014_xx_thumb.jpg'
        },
        {
            id: 20,
            name: 'Sổ vở B5 MJ Retro film',
            cost: 40000,
            img: '21070013_XX_thumb.JPG'
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
    return (
        <div className="main">
            <div className="container">
                <div className="row mt-5 gx-5">
                    <div className="col-lg-3 d-lg-block d-none">
                        <Category />
                    </div>
                    {/* Categogy- mobile */}
                    <CategoryMobile />
                    <div className="col-lg-9 col-12 col-md-11">
                        <NavProduct title="Sổ vở" />
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
