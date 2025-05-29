const express = require('express')
const router = express.Router()

const controller = require('./anime.controller')

function getPage(request, response) {
    const template = controller.getPageTemplate()
    const data = controller.getAnimeData(request.params.id)

    if (!template) {
        response.sendStatus(404)
        return
    }


    if (!data) {
        response.sendStatus(404)
        return
    }

    response.render(template, data)
}

router.get('/:id', getPage)

module.exports = router