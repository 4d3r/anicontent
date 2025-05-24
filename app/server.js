const express = require('express')
const app = express()

const port = 3000

const routes = {
    home: require('./routes/home.js'),
    test: require('./routes/test.js'),
}

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

app.use('/', routes.home)
app.use('/anime', routes.test)
