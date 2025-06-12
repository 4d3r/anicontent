const path = require('path')

const directory = path.join(process.cwd(), 'app')

const images = '/images/anime'
const videos = path.join(directory, 'public', 'videos')

let animes = []

class Anime {
    constructor(config) {
        this.id = config.id

        this.name = config.name
        this.desc = config.desc

        this.icon = ''
        this.episodes = []
        this.keyframes = []

        this._setIcon(config.icon)
        this._setSeries(config.episodes)
        this._setKeyframes(config.keyframes)

        animes.push(this)
    }

    _setIcon(file) {
        this.icon = `${images}/${this.id}/${file}`
    }

    _setKeyframes(keyframes) {
        for (const keyframe of keyframes) {
            this.keyframes.push(`${images}/${this.id}/keyframes/${keyframe}`)
        }
    }

    _setSeries(episodes) {
        for (const episode of episodes) {
            this.episodes.push({
                index: episode.index, 
                file: path.join(videos, this.id, episode.file)
            })
        }
    }

    getEpisode(index) {
        for (const episode of this.episodes) {
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