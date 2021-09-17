import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItemLv2(props) {
    return (
        <li className="main-category-item-lv2 text-decoration-none">
            <Link className="text-decoration-none" to={`/shop/${props.id}`}>{props.name}</Link>
        </li>
    )
}
