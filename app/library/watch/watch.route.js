const express = require('express')
const path = require('path')

const router = express.Router()
const directory = path.join(process.cwd(), 'app')

const controller = require('./watch.controller')
const errorPage = path.join(directory, 'public', 'views', 'error')

function getPage(request, response) {
    const template = controller.getPageTemplate()
    const data = {
        id: request.params.id,
        episode: request.params.episode,
        anime: controller.getAnimeData(request.params.id)
    }

    if (!data.episode) {
        data.episode = 1
    }

    if (!controller.getVideo(data.id, data.episode)) {
        response.status(404).render(errorPage)
        return
    }

    if (!template) {
        response.status(404).render(errorPage)
        return
    }

    response.render(template, data)
}

router.get('/:id/:episode', getPage)
router.get('/:id/', getPage)

module.exports = router