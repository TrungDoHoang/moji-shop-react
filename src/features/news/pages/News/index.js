import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {StringParam, useQueryParam } from 'use-query-params'
import './News.css'
import $ from 'jquery'
import NewsItem from '../../components/NewsItem'
import { newsSelector, postsSelector } from '../../../../app/reducers/newsSlice'

export default function News() {
    document.title = 'Tin tức về Moji'
    const news = useSelector(newsSelector)
    const posts = useSelector(postsSelector)
    const [path, setpath] = useQueryParam('slug', StringParam)
    console.log(path)

    const changTab = useRef(() => {
        const tabs = Array.from($(".tab-item"))
        const panes = $('.tab-pane')
        $('.breadcrumb-item.active').text($(".tab-item.active").text())

        tabs.forEach((tab, index) => {
            const pane = panes[index];

            tab.onclick = function () {
                $('.breadcrumb-item.active').text($(this).text())
                $(".tab-item.active").removeClass("active")
                $(".tab-pane.active").removeClass("active")

                $(this).addClass("active")
                pane.classList.add('active')

            }
        });

    })
    return (
        <div className="container text-center" ref={changTab.current}>
            <div className="row">
                {/* <div class="m-auto"> */}
                <div className="main mt-4">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" className="header__link text-decoration-none">Trang chủ</Link></li>
                            <li className="breadcrumb-item active"></li>
                        </ul>
                    </nav>
                    <div className="news-heading col-12 text-center">
                        <h3>Tin hot nhất</h3>
                    </div>
                    <div className="col-12">
                        {/* Tab items */}
                        <div className="tabs d-flex">
                            <div className={`tab-item ${path === 'tuyen_dung' ? '' : 'active'}`}>
                                Tin tức
                            </div>
                            <div className={`tab-item ${path === 'tuyen_dung' ? 'active' : ''}`}>
                                Tuyển dụng
                            </div>
                        </div>
                        {/* Tab content */}
                        <div className="tab-content">
                            <div className={`tab-pane ${path === 'tuyen_dung' ? '' : 'active'}`}>
                                {news.map(item => <NewsItem key={item.id} titleNews={item.title} timeCreated={item.timeCreated} description={item.description} linkTo={item.linkTo} img={item.img} />)}
                            </div>
                            <div className={`tab-pane ${path === 'tuyen_dung' ? 'active' : ''}`}>
                                {posts.map(item => <NewsItem key={item.id} titleNews={item.title} timeCreated={item.timeCreated} description={item.description} linkTo={item.linkTo} img={item.img} />)}
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>

    )
}
