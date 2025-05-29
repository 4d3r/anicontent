const path = require('path')

const animeService = require(path.join(process.cwd(), 'shared', 'services', 'anime.service.js'))
const filesService = require(path.join(process.cwd(), 'shared', 'services', 'files.service.js'))

const views = path.join(process.cwd(), 'public', 'views')

function getPageTemplate() {
    if (!filesService.isExists(views) || !filesService.isExists(path.join(views, 'catalog.ejs'))) {
        return
    }

    return path.join(views, 'catalog')
}

function getAnimes() {
    return animeService.getAnimes()
}

module.exports = {
    getPageTemplate,
    getAnimes,
}