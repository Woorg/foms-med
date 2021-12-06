import Swiper, { Scrollbar } from 'swiper';

export function departments() {

    let mySwiper = new Swiper('.departments__slider .swiper', {
        modules: [Scrollbar],
        loop: true,
        slidesPerView: 4,
        // centeredSlides: true,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        // scrollbar
        scrollbar: {
            el: '.departments__slider .swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 20
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 4,
                spaceBetween: 80
            }
        }

    });

}
