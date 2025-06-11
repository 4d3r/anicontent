const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = 3000

const public = path.join(process.cwd(), 'public')
const library = path.join(process.cwd(), 'library')

function setupDatabase() {
    const database = require('./database/index')
    database.setup()
}

function setupRoutes() {
    const content = fs.readdirSync(library)

    content.forEach(function(folder){
        const index = path.join(library, folder, 'index.js')
        const exists = fs.existsSync(index)
        if (!exists) { return }

        const start = require(index)
        if (!start) { return }

        start(app)
    })
}

console.log("Current working directory: ", process.cwd());

app.set('view engine', 'ejs')
app.use(express.static(public))

setupDatabase()
setupRoutes()

app.use(function(req, res, next) {
    res.status(404)

    if (req.accepts('html')) {
        res.render(path.join(process.cwd(), 'public', 'views', 'error'), { url: req.url })
        return
    }

    if (req.accepts('json')) {
        res.json({ error: 'Not found' })
        return
    }

    res.type('txt').send('Not found')
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})