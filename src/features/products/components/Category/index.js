import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import CategoryItem from './CategoryItem'
import './Category.css'


export default function Category() {
    const [bookCategory, setBookCategory] = useState(
        [
            { id: 'sach_giao_khoa', name: 'Sách giáo khoa' },
            { id: 'sach_khoa_hoc', name: 'Sách khoa học' },
            { id: 'so_vo', name: 'Sổ vở' },
            { id: 'truyen_ngon_tinh', name: 'Truyện ngôn tình' },
        ]
    )

    const [toolCategory, setToolCategory] = useState([
        { id: 'but_ngo_nghinh', name: 'Bút ngộ nghĩnh' },
        { id: 'balo_thoi_trang', name: 'Balo thời trang' },
        { id: 'thuoc_ke', name: 'Thước kẻ' },
        { id: 'hop_but_da_nang', name: 'Hộp bút đa năng' },
        { id: 'dung_cu_hoc_tap_khac', name: 'Dụng cụ học tập khác' },
    ])

    useEffect(() => {
        $('.main-category-item > div').click(function () {
            $(this).toggleClass('open')
        })
        $('.main-category-top').click(function () {
            $(this).toggleClass('open')
        })
    })
    return (
        <div className="main-category">
            <div className="main-category-top d-flex justify-content-between open">
                <h3 className="main-category-heading">Danh mục sản phẩm</h3>
                <span className="main-category-top-add material-icons-outlined">
                    add
                </span>
                <span className="main-category-top-remove material-icons-outlined">
                    remove
                </span>
            </div>
            <ul className="main-category-list list-unstyled mt-4">
                <CategoryItem key={3} name="Sổ vở" categories={bookCategory} />
                <CategoryItem key={4} name="Dụng cụ học tập" categories={toolCategory} />
            </ul>
        </div>
    )
}
