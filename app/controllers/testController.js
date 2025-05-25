const path = require('path')

const animeService = require(path.join(__dirname, '../services/', 'animeService.js'))

async function getAnimeById(request, response) {
    if (!request.params.id) {
        return
    }

    const data = await animeService.findFromId(request.params.id)
    response.json(data)
}

module.exports = {getAnimeById}