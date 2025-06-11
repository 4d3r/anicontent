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

function getVideo(id, index) {
    const anime = animeService.findAnime(id)
    if (!anime) { return }

    const episode = anime.getEpisode(index)
    if (!episode) { return }
    if (!episode.file) { return }

    return episode.file
}

module.exports = {
    getPageTemplate,
    getVideo,
}