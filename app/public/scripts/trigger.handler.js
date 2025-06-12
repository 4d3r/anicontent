function onContentLoaded() {
    const watchButton = document.querySelector(`.watch-button`)

    watchButton.addEventListener('click', function (event) {
        if (!watchButton.id) { return }
        window.location.href = `/watch/${watchButton.id}`
    })
}

document.addEventListener('DOMContentLoaded', onContentLoaded)