const path = require('path')
const utils = {getFiles: require('./getFiles')}
const types = [
    'jpg',
    'jpeg',
    'png'
]

module.exports = function(animeId) {
    const directory = path.join(__dirname, '../public/images/', animeId)
    const images = utils.getFiles(directory)

    let target = null

    if (!directory) {
        return
    }

    types.forEach(function(type) {
        const isTarget = images.find(function(image){
            return image === `Icon.${type}`
        })

        if (!isTarget) {
            return
        }

        target = `Icon.${type}`
    })

    if (!target) {
        // 404??
        return
    }

    return path.join('../images/', animeId, target)
}