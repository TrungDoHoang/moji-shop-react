import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useQueryParam, NumberParam } from 'use-query-params'
import $ from 'jquery'
import './Detail.css'

export default function Detail() {
    const [id, setId] = useQueryParam('id', NumberParam);
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
        $('input[type=radio][name=color]').change(function() {
            let [name, ...last] = $('#name').text().split('-')
            $('#name').text(`${name}-${$('input[type=radio][name=color]:checked').val()}`)
        })
        $('input[name=quantity][type=number]').blur(function() {
            let val = $(this).val()
            if(val < 1){
                alert('Số lượng mua tối thiểu là 1')
                $(this).val(1)
            } 
        })
    })
    const product = products.find(item => item.id === id)
    console.log(product)
    return (
        <div className="container text-center">
            <div className="row">
                <div className="main mt-5 mb-5">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" className="header__link text-decoration-none">Trang chủ</Link></li>
                            <li className="breadcrumb-item"><Link to="/shop" className="header__link text-decoration-none">Dụng
                                cụ học tập</Link></li>
                            <li className="breadcrumb-item active">Balo thời trang</li>
                        </ul>
                    </nav>
                    <div className="col-12">
                        <div className="product-details row g-5">
                            <img className="img-product-details col-lg-6 col-md-12 col-12" src={`/assets/images/product/${product.img}`} alt="" />
                            <div className="product-details-information d-flex flex-column col-lg-6 col-md-12 col-12">
                                <div className="name-product-details d-flex align-items-start text-start w-100">
                                    <p id="name">{product.name}</p>
                                    <div className="share ms-auto d-flex align-items-center">
                                        <span className="material-icons-outlined">
                                            share
                                        </span>
                                        <div className="share-to d-flex align-items-center">
                                            Chia sẻ đến:
                                            <a href="https://www.facebook.com/"
                                                target="_blank" rel="noreferrer noopener"
                                                className="d-flex align-items-center">
                                                <ion-icon name="logo-facebook" className="f-b" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="favorite d-flex align-items-center ms-2">
                                        <ion-icon name="heart-outline" className="heart-border" />
                                        <ion-icon name="heart" className="heart" />
                                    </div>
                                </div>
                                <div className="product-details-id text-start">
                                    Mã sản phẩm: {product.id}
                                </div>
                                <div className="product-details-cost text-start">
                                    {product.cost}đ
                                </div>
                                <form method="POST" className="product-details-form text-start">
                                    <div className="form-check-color d-flex align-items-center">
                                        <label> Màu sắc:</label>
                                        <input type="radio" defaultValue="Đen" title="Đen" name="color" style={{ backgroundColor: '#000' }} />
                                        <input type="radio" defaultValue="Trắng" title="Trắng" name="color" style={{ backgroundColor: '#fff' }} />
                                    </div>
                                    <div className="form-check-quantity d-flex align-items-center w-50">
                                        <label htmlFor="quantity" className="w-50"> Số lượng: </label>
                                        <input type="number" name="quantity" min={1} defaultValue={1} id="quantity" className="form-control me-auto" />
                                    </div>
                                    <button className="btn btn-pink mt-4">Thêm vào giỏ hàng</button>
                                </form>
                                <div className="row g-4 mt-5">
                                    <div className="shipping col-lg-4 col-md-6 col-12 text-start d-flex align-items-center">
                                        <span className="material-icons-outlined">
                                            local_shipping
                                        </span>
                                        Giao hàng toàn quốc đơn hàng từ 100k
                                    </div>
                                    <div className="shipping col-lg-4 col-md-6 col-12 text-start d-flex align-items-center">
                                        <span className="material-icons-outlined">
                                            monetization_on
                                        </span>
                                        COD nội thành HN, HCM
                                    </div>
                                    <div className="shipping col-lg-4 col-md-6 col-12 text-start d-flex align-items-center">
                                        <span className="material-icons-outlined">
                                            published_with_changes
                                        </span>
                                        Đổi trả trong 24h
                                    </div>
                                    <div className="shipping col-12 text-start d-flex align-items-center">
                                        <span className="material-icons-outlined">
                                            local_shipping
                                        </span>
                                        Freeship cho đơn hàng từ 150k nội thành HN <br />
                                        Hỗ trợ ship 30k cho đơn hàng từ 500k toàn quốc
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}
