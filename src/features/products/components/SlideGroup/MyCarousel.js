import React from 'react'

export default function MyCarousel() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={5000}>
            <img src="/assets/images/banner/Banner web_thong bao ngung ship.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="/assets/images/banner/Banner web_tam ngung hoat dong.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="/assets/images/banner/sb_1612181109_394.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={5000}>
            <img src="/assets/images/banner/slide-banner-3.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="btn-pink carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="btn-pink carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}
