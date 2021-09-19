import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Pagination() {
    return (
        <div className="col-12">
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><NavLink className="page-link" to="/">Prev</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="/">1</NavLink></li>
                    <li className="page-item active"><NavLink className="page-link" to="/">2</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="/">3</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="/">4</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="/">5</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="/">Next</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
