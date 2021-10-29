import React from 'react'

export default function NavProduct({title="Sản phẩm"}) {
    return (
        <div className="products d-flex justify-content-between">
            <div className="products-heading">
                <h3>{title}</h3>
            </div>
            {/* <select className="form-select ms-4 d-none d-xl-block">
                <option defaultValue>Mới nhất</option>
                <option value={1}>Giá tăng dần</option>
                <option value={2}>Giá giảm dần</option>
                <option value={3}>Sale</option>
            </select> */}
        </div>
    )
}
