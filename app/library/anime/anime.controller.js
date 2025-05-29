const path = require('path')

const animeService = require(path.join(process.cwd(), 'shared', 'services', 'anime.service.js'))
const filesService = require(path.join(process.cwd(), 'shared', 'services', 'files.service.js'))

const views = path.join(process.cwd(), 'public', 'views')

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