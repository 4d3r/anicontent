const express = require('express')
const path = require('path')

const router = express.Router()

const controller = require('./catalog.controller')
const errorPage = path.join(process.cwd(), 'public', 'views', 'error')

function getPage(request, response) {
    const template = controller.getPageTemplate()
    const data = {
        animes: controller.getAnimes(),
    }

    if (!template) {
        response.sendStatus(404).render(errorPage)
        return
    }

    if (!data) {
        response.sendStatus(404).render(errorPage)
        return
    }

    response.render(template, data)
}

router.get('/', getPage)
module.exports = router