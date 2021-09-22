import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './FormSearch.css'
import { searchProducts } from '../../../../app/reducers/productsSlice'
import { useDispatch } from 'react-redux'
import $ from 'jquery'
import {useHistory} from 'react-router'

function FormSearch() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const location = useHistory()

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const searchAny = (e) => {
    e.preventDefault()
    $('.search').blur()
    let key = title
    location.replace('/search/query?key='+ key)
    dispatch(searchProducts(key))
  }
  return (
    <div className="header-search">
      <form className="search-form" onSubmit={searchAny}>
        <input type="text" className="search form-control search-form-input" onChange={changeTitle} value={title} placeholder="Tìm kiếm sản phẩm" />
        <button className="btn btn-search d-flex align-items-center"><span className="material-icons-outlined">
          search
        </span></button>
      </form>
      <span className="quick-search mt-2">
        <Link className="header__link text-decoration-none" to="/">Ốp điện thoại</Link>
        <Link className="header__link text-decoration-none" to="/">Quạt nhựa</Link>
        <Link className="header__link text-decoration-none" to="/">Sticker</Link>
        <Link className="header__link text-decoration-none" to="/">BT21</Link>
      </span>
    </div>
  )
}

export default FormSearch
