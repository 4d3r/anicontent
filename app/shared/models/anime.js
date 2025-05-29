let animes = []

class Anime {
    constructor(id, name, desc) {
        this.id = id

        this.name = name
        this.desc = desc

        this.icon = ''
        this.series = []

        this._updateIcon()

        animes.push(this)
    }

    _updateIcon() {
        // update icon thing
    }
}

function getAnimes() {
    return animes
}

module.exports = {
    Anime,
    getAnimes
}