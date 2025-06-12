function onContentLoaded() {
    const videoWrapper = document.querySelector('.video-wrapper')
    const videoPlayer = document.getElementById('video-player')

    const stateButton = document.getElementById('state-button')
    const playIcon = document.getElementById('play-icon')
    const pauseIcon = document.getElementById('pause-icon')

    const progressBar = document.getElementById('progress-bar')
    const progressLine = document.getElementById('progress-bar-line')

    const volumeButton = document.getElementById('volume-button')
    const volumeIcon = document.getElementById('volume-icon')
    const muteIcon = document.getElementById('mute-icon')

    const fullscreenButton = document.getElementById('fullscreen-button')

    function toggleState() {
        if (videoPlayer.paused) {
            videoPlayer.play()

            playIcon.style.display = 'none'
            pauseIcon.style.display = 'block'
        } else {
            videoPlayer.pause()

            playIcon.style.display = 'block'
            pauseIcon.style.display = 'none'
        }
    }

    function toggleVolume() {
        if (videoPlayer.volume > 0) {
            videoPlayer.volume = 0
            volumeIcon.style.display = 'none'
            muteIcon.style.display = 'block'
        } else {
            videoPlayer.volume = 1
            volumeIcon.style.display = 'block'
            muteIcon.style.display = 'none'
        }
    }

    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            if (videoWrapper.requestFullscreen) {
                videoWrapper.requestFullscreen()
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
    }

    function updateProgressLine() {
        const percent = (videoPlayer.currentTime / videoPlayer.duration) * 100

        progressLine.style.width = `${percent}%`
    }

    function setCurrentProgress(event) {
        const rect = progressBar.getBoundingClientRect()
        const position = (event.clientX - rect.left) / rect.width

        videoPlayer.currentTime = position * videoPlayer.duration
    }

    stateButton.addEventListener('click', toggleState)
    volumeButton.addEventListener('click', toggleVolume)
    fullscreenButton.addEventListener('click', toggleFullscreen)

    progressBar.addEventListener('click', setCurrentProgress)
    videoPlayer.addEventListener('click', toggleState)
    videoPlayer.addEventListener('timeupdate', updateProgressLine)
}

document.addEventListener('DOMContentLoaded', onContentLoaded)