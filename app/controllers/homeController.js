const path = require('path')
const page = path.join(__dirname, '../public/views', 'homePage')

const animeService = require(path.join(__dirname, '../services/', 'animeService.js'))

async function getRecommended() {
    // добавить какую-то логику для рекомендаций (можно просто рандомные анимки кидать)
    return await animeService.getLibrary()
}

async function getPopular() {
    // добавить какую-то логику для популярных анимешек (можно также рандом)
    return await animeService.getLibrary()
}

async function getHomePage(request, response) {
    const animes = await getRecommended()

    if (!animes) {
        return
    }

    response.render(page, {
        content: animes
    })
}

module.exports = {getHomePage}