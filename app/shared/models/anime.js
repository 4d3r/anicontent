const path = require('path')

const images = '/images/'
const videos = path.join(process.cwd(), 'public', 'videos')

let animes = []

class Anime {
    constructor(config) {
        this.id = config.id

        this.name = config.name
        this.desc = config.desc

        this.icon = ''
        this.series = []

        this._setIcon(config.icon)
        this._setSeries(config.series)

        animes.push(this)
    }

    _setIcon(file) {
        this.icon = path.join(images, this.id, file)
    }

    _setSeries(series) {
        for (const episode of series) {
            this.series.push({
                index: episode.index, 
                file: path.join(videos, this.id, episode.file)
            })
        }
    }

    getEpisode(index) {
        for (const episode of this.series) {
            if (episode.index != index) { continue }
            return episode
        }
    }
}

function getAnimes() {
    return animes
}

module.exports = {
    Anime,
    getAnimes
}