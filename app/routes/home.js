const express = require('express')
const path = require('path')

const router = express.Router()

const controller = require('../controllers/homeController')

const views = '../public/views/'
const icons = '../images/'

router.get('/', function(request, response) {
    controller.getAnimesFromDatabase()
    response.render(path.join(directory, 'homePage'), {
        array: [
            {id: 'uebishe', name: 'Мой братик больше не братик!', icon: path.join(icons, 'test.jpg')},
            {id: 'uebishe', name: 'Мой братик больше не братик!', icon: path.join(icons, 'test.jpg')},
        ]
    })
})

module.exports = router