const animeService = require('../shared/services/anime.service')
const animeData = require('./data.json')

function setup() {
    for (const config of animeData) {
        animeService.createAnime(config)
    }
}

module.exports = { setup }