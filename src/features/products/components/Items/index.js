import React from 'react'
import ProductItem from '../ProductItem'

function Items({ currentItems }) {
    return (
        <>
            {currentItems && currentItems.map(product => {
                return <ProductItem key={product.id} id={product.id} name={product.name}
                    cost={product.cost} img={product.img} SoLuong={product.SoLuong} />
            })}
        </>
    )
}

export default Items
