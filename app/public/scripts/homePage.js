function addOnClickToClass(className, callback) {
    const elements = document.querySelectorAll(`.${className}`)

    elements.forEach(function(element){
        element.onclick = callback;
    });
}

function handleClick(event) {
    window.location.href = `/anime/${event.currentTarget.id}`;
}

addOnClickToClass('__trigger', handleClick);
