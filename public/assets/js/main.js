$(document).ready(function () {

    // toggle cart
    if ($('.header-cart')) {
        $('.header-cart-icon').click(() => {
            $('.header-cart-list').toggleClass('open')
        })
    }
    // Hiệu ứng xuất hiện của product
    // if (document.querySelector('.product')) {
    //     TweenMax.staggerFrom(
    //         $('.product'), // phần tử được chọn
    //         1, // thời gian chuyển động
    //         { top: 100, opacity: 0 },
    //         0.2 // thời gian cách nhau giữa mỗi hiệu ứng
    //     )
    // }

    // Multi carousel
    if (document.querySelector('.multi-carousel')) {
        let multiCarousel = document.querySelector('.multi-carousel')
        let items = multiCarousel.querySelectorAll('.carousel .carousel-item')
        console.log('Has multicarousel')

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
    }
    if (document.querySelector('.tab-item')) {
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
    
    }
    if(document.querySelector('.product-details')){
        $('input[type=radio][name=color]').change(function() {
            let [name, ...last] = $('#name').text().split('-')
            $('#name').text(`${name}-${$('input[type=radio][name=color]:checked').val()}`)
        })
        $('input[name=quantity][type=number]').blur(function() {
            let val = $(this).val()
            if(val < 1){
                alert('Số lượng mua tối thiểu là 1')
                $(this).val(1)
            } 
        })
    }
});

