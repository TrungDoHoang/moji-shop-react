import React, { useState } from 'react'
import $ from 'jquery'
import CategoryItem from './CategoryItem'
import './Category.css'
import { bookCategorySelector, toolCategorySelector } from '../../../../app/reducers/categorySlice'
import { useSelector } from 'react-redux'


export default function Category() {
    const bookCategory = useSelector(bookCategorySelector)
    const toolCategory = useSelector(toolCategorySelector)

    const toggleOpen = (e) => {
        $(e.target).parent().toggleClass('open')
    }

    return (
        <div className="main-category">
            <div className="main-category-top d-flex justify-content-between open" onClick={toggleOpen}>
                <h3 className="main-category-heading flex-grow-1">Danh mục sản phẩm</h3>
                <span className="main-category-top-add material-icons-outlined">
                    add
                </span>
                <span className="main-category-top-remove material-icons-outlined">
                    remove
                </span>
            </div>
            <ul className="main-category-list list-unstyled mt-4">
                <CategoryItem key={3} name="Sổ vở" categories={bookCategory} toggleOpen ={toggleOpen} />
                <CategoryItem key={4} name="Dụng cụ học tập" categories={toolCategory} toggleOpen ={toggleOpen}/>
            </ul>
        </div>
    )
}
