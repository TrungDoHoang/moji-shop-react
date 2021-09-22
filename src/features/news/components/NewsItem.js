import React from 'react'

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
                    <a href={linkTo} target="_blank" rel="noopener noreferrer">Xem thêm</a>
                </div>
            </div>
        </div>
    )
}
