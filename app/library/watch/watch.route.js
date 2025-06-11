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
        index: request.params.index
    }

    if (!data.index) {
        data.index = 1
    }

    if (!controller.getVideo(data.id, data.index)) {
        response.status(404).render(errorPage)
        return
    }

    if (!template) {
        response.status(404).render(errorPage)
        return
    }

    response.render(template, data)
}

router.get('/:id/:index', getPage)
router.get('/:id/', getPage)

module.exports = router