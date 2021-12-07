import Swiper, { Scrollbar } from 'swiper';

export function departments() {

    let mySwiper = new Swiper('.departments__slider .swiper', {
        modules: [Scrollbar],
        // loop: true,
        // slidesPerView: 4,
        // centeredSlides: true,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        preventClicks: true,
        // scrollbar
        scrollbar: {
            el: '.departments__slider .swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.4,

            },
            640: {
                slidesPerView: 3,
                // spaceBetween: 80
            },
            768: {
                slidesPerView: 4,
                // spaceBetween: 80
            },
            1200: {
                slidesPerView: 4,
                // spaceBetween: 40
            }

        }

    });

}
