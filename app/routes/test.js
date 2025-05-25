const express = require('express')
const router = express.Router()

const testController = require('../controllers/testController')

router.get('/:id', testController.getAnimeById)

module.exports = router