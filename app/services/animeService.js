const path = require('path')
const utils = {
    getFiles: require(path.join(__dirname, '../utils/getFiles.js'))
}

const ANIME_DIRECTORY = path.join(__dirname, '../database');

class AnimeService {
    constructor() {
        this._library;
    }

    async getLibrary() {
        const files = utils.getFiles(ANIME_DIRECTORY)
        const animes = []

        files.forEach(function(file) {
            const data = require(path.join(ANIME_DIRECTORY, file))

            if (!data || !data.name) {
                return;
            }

            animes.push(data)
        });

        this._library = animes
        return this._library
    }

    async findFromId(id) {
        const library = await this.getLibrary()
        if (!library) {
            return
        }

        let target = null

        library.forEach(function(anime){
            if (!anime.id || anime.id != id) {
                return;
            }

            target = anime
        })

        return target
    }
}

module.exports = new AnimeService()