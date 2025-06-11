const path = require('path')
const directory = path.join(process.cwd(), 'app')

const animeService = require(path.join(directory, 'shared', 'services', 'anime.service.js'))
const filesService = require(path.join(directory, 'shared', 'services', 'files.service.js'))

const views = path.join(directory, 'public', 'views')

function getPageTemplate() {
    if (!filesService.isExists(views) || !filesService.isExists(path.join(views, 'anime.ejs'))) {
        return
    }

    return path.join(views, 'anime')
}

function getAnimeData(id) {
    return animeService.findAnime(id)
}

module.exports = {
    getPageTemplate,
    getAnimeData
}