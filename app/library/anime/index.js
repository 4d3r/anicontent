const route = require('./anime.route')

module.exports = function(app) {
    app.use('/anime', route)
}