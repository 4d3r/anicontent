const path = require('path')
const directory = path.join(process.cwd(), 'app')

const animeModel = require(path.join(directory, 'shared', 'models', 'anime.js'))

function createAnime(config) {
    return new animeModel.Anime(config)
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