import React, { useRef } from 'react'
import $ from 'jquery'
import './ScrollToTop.css'

export default function ScrollToTop() {
    const myRef = useRef(() => {
        var btn = $('#scroll-to-top');

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            $('html, body').animate({ scrollTop: 0 }, '300');
        });


    })
    return (
        <div id="scroll-to-top" ref={myRef.current} className="d-flex justify-content-center align-items-center">
            <ion-icon name="arrow-up-outline"></ion-icon>
        </div>
    )
}
