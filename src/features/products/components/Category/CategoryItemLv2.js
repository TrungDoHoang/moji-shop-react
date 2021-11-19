import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function CategoryItemLv2(props) {
    return (
        <li className="main-category-item-lv2 text-decoration-none">
            <NavLink 
                className="text-decoration-none" 
                to={`/shop/product?category=${props.slug}`}>
                    {props.name}
            </NavLink>
        </li>
    )
}
