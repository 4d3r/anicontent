const path = require('path')

const animeService = require('../shared/services/anime.service')
const animeData = require('./data.json')

const images = '../images/'

function setup() {
    for (const anime of animeData) {
        const animeObject = animeService.createAnime(anime.id, anime.name, anime.desc)
        animeObject.icon = path.join(images, anime.id, anime.icon)
    }
}

module.exports = { setup }