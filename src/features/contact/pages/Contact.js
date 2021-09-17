import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import './Contact.css'

export default function Contact() {
    useEffect(() => {
        const tabs = Array.from($(".tab-item"))
        const panes = $('.tab-pane')

        tabs.forEach((tab, index) => {
            const pane = panes[index];

            tab.onclick = function () {
                $(".tab-item.active").removeClass("active")
                $(".tab-pane.active").removeClass("active")

                $(this).addClass("active")
                pane.classList.add('active')
            }
        });

    })
    return (
        <div className="container text-center">
            <div className="row">
                {/* <div class="m-auto"> */}
                <div className="main mt-4">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/" className="header__link text-decoration-none">Trang chủ</Link></li>
                            <li className="breadcrumb-item active">Hệ thống cửa hàng</li>
                        </ul>
                    </nav>
                    <div className="main-heading col-12 text-center">
                        <h3>Hệ thống cửa hàng</h3>
                    </div>
                    <div className="col-12">
                        {/* Tab items */}
                        <div className="tabs d-flex">
                            <div className="tab-item active">
                                Hà Nội
                            </div>
                            <div className="tab-item">
                                TP.Hồ Chí Minh
                            </div>
                        </div>
                        {/* Tab content */}
                        <div className="tab-content">
                            <div className="tab-pane active">
                                <div className="store row g-5">
                                    <img className="img-store col-md-6 col-12" src="./assets/images/store/81_Ba_Trieu.jpg" alt="" />
                                    <div className="store-location-details d-flex flex-column align-items-baseline justify-content-between col-md-6 col-12">
                                        <div className="name-store d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                maps_home_work
                                            </span>
                                            Moji Bà Triệu
                                        </div>
                                        <div className="store-location d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                location_on
                                            </span>
                                            81 Bà Triệu, Hai Bà Trưng
                                        </div>
                                        <div className="store-tel d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                call
                                            </span>
                                            0968317253
                                        </div>
                                        <div className="store-time d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                access_time_filled
                                            </span>
                                            9h - 22h
                                        </div>
                                        <div className="store-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59582.461376054256!2d105.74907541260619!3d21.036533426339165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba257897c07%3A0x92bf9bdd0bcec4bc!2sMoji%20Shop!5e0!3m2!1svi!2s!4v1631028012406!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                                <div className="store row g-5">
                                    <img className="img-store col-md-6 col-12" src="./assets/images/store/60_Tran_Dai_Nghia.jpg" alt="" />
                                    <div className="store-location-details d-flex flex-column align-items-baseline justify-content-between col-md-6 col-12">
                                        <div className="name-store d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                maps_home_work
                                            </span>
                                            Moji Trần Đại Nghĩa
                                        </div>
                                        <div className="store-location d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                location_on
                                            </span>
                                            60 Trần Đại Nghĩa, Hai Bà Trưng
                                        </div>
                                        <div className="store-tel d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                call
                                            </span>
                                            0971913545
                                        </div>
                                        <div className="store-time d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                access_time_filled
                                            </span>
                                            9h - 22h
                                        </div>
                                        <div className="store-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59582.461376054256!2d105.74907541260619!3d21.036533426339165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba257897c07%3A0x92bf9bdd0bcec4bc!2sMoji%20Shop!5e0!3m2!1svi!2s!4v1631028012406!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                                <div className="store row g-5">
                                    <img className="img-store col-md-6 col-12" src="./assets/images/store/241_Chua_Boc.jpg" alt="" />
                                    <div className="store-location-details d-flex flex-column align-items-baseline justify-content-between col-md-6 col-12">
                                        <div className="name-store d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                maps_home_work
                                            </span>
                                            Moji Chùa Bộc
                                        </div>
                                        <div className="store-location d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                location_on
                                            </span>
                                            241 Chùa Bộc, Đống Đa
                                        </div>
                                        <div className="store-tel d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                call
                                            </span>
                                            0904536337
                                        </div>
                                        <div className="store-time d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                access_time_filled
                                            </span>
                                            9h - 22h
                                        </div>
                                        <div className="store-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59582.461376054256!2d105.74907541260619!3d21.036533426339165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aba257897c07%3A0x92bf9bdd0bcec4bc!2sMoji%20Shop!5e0!3m2!1svi!2s!4v1631028012406!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane">
                                <div className="store row g-5">
                                    <img className="img-store col-md-6 col-12" src="./assets/images/store/92_Ho_Tung_Mau.jpg" alt="" />
                                    <div className="store-location-details d-flex flex-column align-items-baseline justify-content-between col-md-6 col-12">
                                        <div className="name-store d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                maps_home_work
                                            </span>
                                            Moji Hồ Tùng Mậu
                                        </div>
                                        <div className="store-location d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                location_on
                                            </span>
                                            92 Hồ Tùng Mậu, Phường Bến Nghé, Q1
                                        </div>
                                        <div className="store-tel d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                call
                                            </span>
                                            0964904992
                                        </div>
                                        <div className="store-time d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                access_time_filled
                                            </span>
                                            9h - 22h
                                        </div>
                                        <div className="store-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.011332308888!2d106.703583!3d10.772747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x687c002236b0f822!2sMoji%20Shop!5e0!3m2!1svi!2sus!4v1631031896991!5m2!1svi!2sus" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                                <div className="store row g-5">
                                    <img className="img-store col-md-6 col-12" src="./assets/images/store/Nguyen_DInh_Chieu.jpg" alt="" />
                                    <div className="store-location-details d-flex flex-column align-items-baseline justify-content-between col-md-6 col-12">
                                        <div className="name-store d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                maps_home_work
                                            </span>
                                            Moji Nguyễn Đình Chiểu
                                        </div>
                                        <div className="store-location d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                location_on
                                            </span>
                                            459E Nguyễn Đình Chiểu, P5, Q3 (ngã tư Cao Thắng)
                                        </div>
                                        <div className="store-tel d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                call
                                            </span>
                                            0971913545
                                        </div>
                                        <div className="store-time d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                access_time_filled
                                            </span>
                                            9h - 22h
                                        </div>
                                        <div className="store-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.011332308888!2d106.703583!3d10.772747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x687c002236b0f822!2sMoji%20Shop!5e0!3m2!1svi!2sus!4v1631031896991!5m2!1svi!2sus" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                                <div className="store row g-5">
                                    <img className="img-store col-md-6 col-12" src="./assets/images/store/Su_Van_Hanh.jpg" alt="" />
                                    <div className="store-location-details d-flex flex-column align-items-baseline justify-content-between col-md-6 col-12">
                                        <div className="name-store d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                maps_home_work
                                            </span>
                                            Moji Sư Vạn Hạnh
                                        </div>
                                        <div className="store-location d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                location_on
                                            </span>
                                            708 Sư Vạn Hạnh, P.12, Q.10 (đối diện chéo Vạn Hạnh Mall)
                                        </div>
                                        <div className="store-tel d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                call
                                            </span>
                                            0904536337
                                        </div>
                                        <div className="store-time d-flex align-items-center">
                                            <span className="me-3 material-icons-outlined">
                                                access_time_filled
                                            </span>
                                            9h - 22h
                                        </div>
                                        <div className="store-map">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15678.011332308888!2d106.703583!3d10.772747!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x687c002236b0f822!2sMoji%20Shop!5e0!3m2!1svi!2sus!4v1631031896991!5m2!1svi!2sus" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>

    )
}
