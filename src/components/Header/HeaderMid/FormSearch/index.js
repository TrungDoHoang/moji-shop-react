import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './FormSearch.css'
import $ from 'jquery'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { chu_deSelector, getChu_de } from '../../../../app/reducers/adminSlice'

function FormSearch() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()
  const chu_de = useSelector(chu_deSelector)
  const location = useHistory()
  useEffect(() => {
    dispatch(getChu_de())
  }, [location.location])
  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const newChu_de = chu_de.reduce((newArr, item) => {
    newArr.unshift(item)
    return newArr
  }, [])

  const searchAny = (e) => {
    e.preventDefault()
    $('.search').blur()
    let key = title
    location.replace('/search/query?key=' + key)
    // dispatch(searchProducts(key))
  }
  return (
    <div className="header-search">
      <form className="search-form" onSubmit={searchAny}>
        <input type="search" className="search form-control search-form-input" onChange={changeTitle} value={title} placeholder="Tìm kiếm sản phẩm" />
        <button className="btn btn-search d-flex align-items-center"><span className="material-icons-outlined">
          search
        </span></button>
      </form>
      <span className="quick-search mt-2">
        {
          newChu_de.slice(0, 4).map((item,index) => (
            <Link key={index} className="header__link text-decoration-none" to={`/shop/product?category=${item.TenVanTat}`}>{item.TenChuDe}</Link>
          ))
        }
        {/* <Link className="header__link text-decoration-none" to="/">Quạt nhựa</Link>
        <Link className="header__link text-decoration-none" to="/">Sticker</Link>
        <Link className="header__link text-decoration-none" to="/">BT21</Link> */}
      </span>
    </div>
  )
}

export default FormSearch
