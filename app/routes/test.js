const express = require('express')
const router = express.Router()

router.get('/:id', function(request, response) {
    response.json(request.params.id)
})

module.exports = router