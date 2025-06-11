const path = require('path')

const animeService = require(path.join(process.cwd(), 'shared', 'services', 'anime.service.js'))
const filesService = require(path.join(process.cwd(), 'shared', 'services', 'files.service.js'))

const shuffleArray = require(path.join(process.cwd(), 'shared', 'utils', 'shuffleArray.js'))

const views = path.join(process.cwd(), 'public', 'views')

function getPageTemplate() {
    if (!filesService.isExists(views) || !filesService.isExists(path.join(views, 'home.ejs'))) {
        return
    }

    return path.join(views, 'home')
}

function getLatestAnimes() {
    const animes = animeService.getAnimes()
    return shuffleArray(animes)
}

function getFavoritedAnimes() {
    const animes = animeService.getAnimes()
    return shuffleArray(animes)
}

module.exports = {
    getPageTemplate,
    getLatestAnimes,
    getFavoritedAnimes
}