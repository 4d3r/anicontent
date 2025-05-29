const watchButton = document.querySelector(".__watch")

watchButton.addEventListener("click", function (event) {
    window.location.href = `/watch/${event.currentTarget.id}`
})
