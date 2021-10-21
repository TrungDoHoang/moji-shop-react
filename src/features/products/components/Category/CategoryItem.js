import React from 'react'
import CategoryItemLv2 from './CategoryItemLv2'

export default function CategoryItem({name, categories, toggleOpen}) {
    
    return (
        <li className="main-category-item" onClick={toggleOpen}>
            <div className="d-flex justify-content-between align-items-center main-category-item--heading">
                <span className="main-category-name flex-grow-1">{name}</span>
                <span className="down material-icons-outlined">
                    expand_more
                </span>
                <span className="less material-icons-outlined">
                    expand_less
                </span>
            </div>
            <ul className="main-category-list-lv2 list-unstyled">
                {categories.map(category => {
                    return <CategoryItemLv2 key={category.MaChuDe} slug={category.TenVanTat} name={category.TenChuDe}/>
                })}
            </ul>
        </li>
    )
}
