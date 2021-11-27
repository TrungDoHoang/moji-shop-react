import React, { useEffect } from 'react'
import $ from 'jquery'
import CategoryItem from './CategoryItem'
import './Category.css'
import { bookCategorySelector, getCategories, toolCategorySelector } from '../../../../app/reducers/categorySlice'
import { useDispatch, useSelector } from 'react-redux'
import CostSlider from '../CostSlider'


export default function Category() {
    const bookCategory = useSelector(bookCategorySelector)
    const toolCategory = useSelector(toolCategorySelector)

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getCategories())
    },[dispatch])

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
                <CategoryItem key={3} name="Sách vở" categories={bookCategory} toggleOpen ={toggleOpen} />
                <CategoryItem key={4} name="Dụng cụ học tập" categories={toolCategory} toggleOpen ={toggleOpen}/>
            </ul>
                <div className="main-category-item">
                    <label htmlFor="" className="text-16 p-2 ms-3">Lọc theo giá</label>
                    <br />
                    <CostSlider />
                </div>
        </div>
    )
}
