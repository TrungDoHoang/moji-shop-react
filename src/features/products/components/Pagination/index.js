import React from 'react'
import { NavLink } from 'react-router-dom'
import './Pagination.css'

export default function Pagination() {
    return (
        <div className="col-12">
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><NavLink className="page-link" to="/">Prev</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="?_page=1" activeClassName="active">1</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="?_page=2" activeClassName="active">2</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="?_page=3" activeClassName="active">3</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="?_page=4" activeClassName="active">4</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="?_page=5" activeClassName="active">5</NavLink></li>
                    <li className="page-item"><NavLink className="page-link" to="/">Next</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
