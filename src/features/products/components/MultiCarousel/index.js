import React, { useRef } from 'react'

export default function MultiCarousel() {

    const ref = useRef(()=>{
        let multiCarousel = document.querySelector('.multi-carousel')
        let items = multiCarousel.querySelectorAll('.carousel .carousel-item')
        
        items.forEach((el) => {
            const minPerSlide = 4
            let next = el.nextElementSibling
            for (var i = 1; i < minPerSlide; i++) {
                if (!next) {
                    // wrap carousel by using first child
                    next = items[0]
                }
                let cloneChild = next.cloneNode(true)
                el.appendChild(cloneChild.children[0])
                next = next.nextElementSibling
            }
        })
    })
    return (
        <>
            <div ref={ref.current} className="container multi-carousel text-center mt-5 my-3">
                <div className="row mx-auto my-auto justify-content-center">
                    <div id="recipeCarousel" className="carousel slide col-12" data-bs-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src="assets/images/banner/sb_1608715990_418.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="card-img-overlay">Slide 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src="/assets/images/banner/sb_1612252488_11.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="card-img-overlay">Slide 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src="/assets/images/banner/sb_1616251716_583.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="card-img-overlay">Slide 3</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src="/assets/images/banner/sb_1619281189_509.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="card-img-overlay">Slide 5</div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="col-md-3">
                                    <div className="card">
                                        <div className="card-img">
                                            <img src="/assets/images/banner/sb_1622297990_263.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="card-img-overlay">Slide 6</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon btn-pink" aria-hidden="true" />
                        </a>
                        <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon btn-pink" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
