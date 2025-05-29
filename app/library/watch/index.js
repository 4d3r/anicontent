const route = require('./watch.route')

module.exports = function(app) {
    app.use('/watch', route)
}