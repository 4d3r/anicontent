function addOnClickToClass(className, callback) {
    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach(element => {
        element.onclick = callback;
    });
}

function handleClick(event) {
    console.log()
    window.location.href = `/anime/${event.currentTarget.id}`;
}

addOnClickToClass('__trigger', handleClick);
