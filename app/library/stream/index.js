const route = require('./stream.route')

module.exports = function(app) {
    app.use('/stream', route)
}