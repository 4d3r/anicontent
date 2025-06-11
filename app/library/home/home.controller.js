const path = require('path')

const directory = path.join(process.cwd(), 'app')

const animeService = require(path.join(directory, 'shared', 'services', 'anime.service.js'))
const filesService = require(path.join(directory, 'shared', 'services', 'files.service.js'))

const shuffleArray = require(path.join(directory, 'shared', 'utils', 'shuffleArray.js'))

const views = path.join(directory, 'public', 'views')

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