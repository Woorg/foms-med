import Swiper from 'swiper';

export function slider() {

    const mySwiper = new Swiper('.slider .swiper', {
        // loop: true,
        slidesPerView: 1,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,

    });

}


export function sliderVideo() {

    const video = document.querySelector('.slider__video');
    const circlePlayButton = document.querySelector('.slider__video-button');
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
