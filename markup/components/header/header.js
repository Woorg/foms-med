
function header() {

    const video = document.querySelector('.header__video');
    const circlePlayButton = document.querySelector('.header__video-button');
    const headerImage = document.querySelector('.header__image');

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    }

    circlePlayButton.addEventListener('click', togglePlay);
    video.addEventListener('playing', function () {
        headerImage.style.opacity = 0;
    });
    video.addEventListener('pause', function () {
        headerImage.style.opacity = 1;
    });


}


export default header;
