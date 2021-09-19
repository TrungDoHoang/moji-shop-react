import React from 'react'
import { useSelector } from 'react-redux'
import { bookCategorySelector, toolCategorySelector } from '../../../../app/reducers/categorySlice'
import $ from 'jquery'
import './Category.css'
import CategoryItem from './CategoryItem'

export default function CategoryMobile() {
    const bookCategory = useSelector(bookCategorySelector)
    const toolCategory = useSelector(toolCategorySelector)

    const toggleOpen = (e) => {
        $(e.target).parent().toggleClass('open')
    }

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
                    <CategoryItem key={1} name="Sổ vở" categories={bookCategory} toggleOpen={toggleOpen} />
                    <CategoryItem key={2} name="Dụng cụ học tập" categories={toolCategory} toggleOpen={toggleOpen} />
                </ul>
            </div>
        </div>
    )
}
