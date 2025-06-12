const express = require('express')
const path = require('path')

const router = express.Router()
const directory = path.join(process.cwd(), 'app')

const controller = require('./anime.controller')
const errorPage = path.join(directory, 'public', 'views', 'error')

function getPage(request, response) {
    const template = controller.getPageTemplate()
    const data = controller.getAnimeData(request.params.id)

    if (!template) {
        response.sendStatus(404).render(errorPage)
        return
    }

    if (!data) {
        response.sendStatus(404).render(errorPage)
        return
    }

    response.render(template, {
        anime: data
    })
}

router.get('/:id', getPage)

module.exports = router