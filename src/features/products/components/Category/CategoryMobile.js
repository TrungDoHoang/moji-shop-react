import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import './Category.css'
import CategoryItem from './CategoryItem'

export default function CategoryMobile() {
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
    return (
        <div className="category-mobile d-lg-none">
            <input type="checkbox" name="filter" id="filter" hidden />
            <label htmlFor="filter" className="filter-btn d-flex flex-column align-items-center justify-content-center">
                <span className="material-icons-outlined">
                    filter_alt
                </span>
                Filter
            </label>
            <label htmlFor="filter" className="overlay" />
            <div className="main-category-filter">
                <label htmlFor="filter" className="nav-mobile-items d-flex justify-content-end pt-4 pb-4 ps-4">
                    <span className="material-icons-outlined">
                        close
                    </span>
                </label>
                <div className="main-category-top d-flex justify-content-between open">
                    <h3 className="main-category-heading">Danh mục sản phẩm</h3>
                    <span className="main-category-top-add material-icons-outlined">
                        add
                    </span>
                    <span className="main-category-top-remove material-icons-outlined">
                        remove
                    </span>
                </div>
                <ul className="main-category-list list-unstyled mt-3">
                    <CategoryItem key={1} name="Sổ vở" categories={bookCategory} />
                    <CategoryItem key={2} name="Dụng cụ học tập" categories={toolCategory} />
                </ul>
            </div>
        </div>
    )
}
