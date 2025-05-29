const path = require('path')

const animeModel = require(path.join(process.cwd(), 'shared', 'models', 'anime.js'))

function createAnime(...args) {
    return new animeModel.Anime(...args)
}

function getAnimes() {
    return animeModel.getAnimes()
}

function findAnime(id) {
    const animes = getAnimes()
    return animes.find(anime => anime.id === id)
}

module.exports = {
    createAnime,
    getAnimes,
    findAnime
}