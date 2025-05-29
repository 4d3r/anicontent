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

        console.log(`${index} exists.`)

        const start = require(index)
        if (!start) { return }

        start(app)
    })
}

app.set('view engine', 'ejs')
app.use(express.static(public))

setupDatabase()
setupRoutes()

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})