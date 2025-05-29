const route = require('./home.route')

module.exports = function(app) {
    app.use('/', route)
}