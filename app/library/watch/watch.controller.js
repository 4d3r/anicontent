const path = require('path')

const directory = path.join(process.cwd(), 'app')

const animeService = require(path.join(directory, 'shared', 'services', 'anime.service.js'))
const filesService = require(path.join(directory, 'shared', 'services', 'files.service.js'))

const views = path.join(directory, 'public', 'views')

function getPageTemplate() {
    if (!filesService.isExists(views) || !filesService.isExists(path.join(views, 'watch.ejs'))) {
        return
    }

    return path.join(views, 'watch')
}

function getAnimeData(id) {
    return animeService.findAnime(id)
}

function getVideo(id, episode) {
    const anime = animeService.findAnime(id)
    if (!anime) { return }

    const content = anime.getEpisode(episode)
    if (!content) { return }
    if (!content.file) { return }

    return content.file
}

module.exports = {
    getPageTemplate,
    getVideo,
    getAnimeData
}