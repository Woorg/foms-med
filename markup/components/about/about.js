
function about() {

    const video = document.querySelector('.about__video-object');
    const circlePlayButton = document.querySelector('.about__video-button');

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


export default about;
