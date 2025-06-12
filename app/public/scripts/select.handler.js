function onContentLoaded() {
    const animeButtons = document.querySelectorAll(`.anime`)
    const smallAnimeButtons = document.querySelectorAll(`.small-anime`)

    for (const button of animeButtons) {
        button.addEventListener('click', function(event) {
            if (!button.id) { return }
            window.location.href = `/anime/${button.id}`
        })
    }

    for (const button of smallAnimeButtons) {
        button.addEventListener('click', function (event) {
            if (!button.id) { return }
            window.location.href = `/anime/${button.id}`
        })
    }
}

document.addEventListener('DOMContentLoaded', onContentLoaded)