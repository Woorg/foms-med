import Swiper, { Autoplay } from 'swiper';

export function slider() {

    const mySwiper = new Swiper('.slider_desktop .swiper', {
        modules: [Autoplay],

        slidesPerView: 1,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
        },


    });

}


export function sliderMob() {

    const mySwiper = new Swiper('.slider_mob .swiper', {
        modules: [Autoplay],

        slidesPerView: 1,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        // preventClicks: true,
        autoplay: {
            delay: 3000,
            pauseOnMouseEnter: true
        },

    });

}


export function sliderVideo() {

    let video = document.querySelector('.slider_desktop .slider__video');
    let circlePlayButton = document.querySelector('.slider_desktop .slider__video-button');
    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }


    circlePlayButton.addEventListener('click', togglePlay);
    video.addEventListener('playing', function () {
        circlePlayButton.style.opacity = 0;
    });
    video.addEventListener('pause', function () {
        circlePlayButton.style.opacity = 1;
    });

}


export function sliderVideoMob() {

    let video = document.querySelector('.slider_mob .slider__video');
    let circlePlayButton = document.querySelector('.slider_mob .slider__video-button');
    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }


    circlePlayButton.addEventListener('click', togglePlay);
    video.addEventListener('playing', function () {
        circlePlayButton.style.opacity = 0;
    });
    video.addEventListener('pause', function () {
        circlePlayButton.style.opacity = 1;
    });

}
