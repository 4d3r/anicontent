const express = require('express')
const router = express.Router()

const controller = require('./home.controller')

function getPage(request, response) {
    const template = controller.getPageTemplate()
    const data = {
        latest: controller.getLatestAnimes(),
        favorited: controller.getFavoritedAnimes(),
    }

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

router.get('/', getPage)
module.exports = router