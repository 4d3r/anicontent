const express = require('express')
const router = express.Router()

const controller = require('./stream.controller')

router.get('/:id/:index', controller.streamVideo)

module.exports = router