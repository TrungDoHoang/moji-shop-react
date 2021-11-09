import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsItem({img, titleNews, timeCreated, description, linkTo}) {
    return (
        <div className="news-item row">
            <img className="img-news col-12 col-md-6" src={`/assets/images/posts/${img}`} alt="" />
            <div className="news-details col-12 col-md-6 d-flex flex-column align-items-baseline justify-content-around ps-2 pe-2 pb-2">
                <div className="title-news text-start">
                    {titleNews}
                </div>
                <div className="time text-start">
                    {timeCreated}
                </div>
                <div className="desc-news text-start">
                    {description}
                </div>
                <div className="link-detail text-start">
                    <Link to={`/news/detail/news?posts=${linkTo}`}>Xem thêm</Link>
                </div>
            </div>
        </div>
    )
}
