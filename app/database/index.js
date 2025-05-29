const path = require('path')

const animeService = require('../shared/services/anime.service')
const animeData = require('./data.json')

const images = '../images/'

function setup() {
    for (const config of animeData) {
        animeService.createAnime(config)
    }
}

module.exports = { setup }