const route = require('./catalog.route')

module.exports = function(app) {
    app.use('/catalog', route)
}