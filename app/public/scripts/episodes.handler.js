function onContentLoaded() {
    const content = document.querySelector(`.content`)
    const buttons = document.querySelectorAll(`.episodes-button`)

    for (const button of buttons) {
        button.addEventListener('click', function(event) {
            if (!button.id) { return }
            window.location.href = `/watch/${content.id}/${button.id}`
        })
    }
}

document.addEventListener('DOMContentLoaded', onContentLoaded)