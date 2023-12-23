(function () {
    function handleVideoAd() {

        const c4videoplayer = document.getElementById("freewheelPlayer")

        if (c4videoplayer) {
            muteAndSpeedUp(c4videoplayer, 16.0)
        }
    }

    function muteAndSpeedUp(videoElement, playbackRate) {
        videoElement.muted = true;
        videoElement.playbackRate = playbackRate;
    }

    function initializeAdHandling() {
        handleVideoAd();

        const observer = new MutationObserver(handleVideoAd);
        observer.observe(document.body, { childList: true, subtree: true });
    }
    setTimeout(initializeAdHandling, 1000);
})();