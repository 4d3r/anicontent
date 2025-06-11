const path = require('path')
const fs = require('fs')

const animeService = require(path.join(process.cwd(), 'shared', 'services', 'anime.service.js'))

const CHUNK_SIZE = 10 ** 6

function getFile(id, index) {
    const anime = animeService.findAnime(id)
    if (!anime) { return }

    const episode = anime.getEpisode(index)
    if (!episode) { return }
    if (!episode.file) { return }

    console.log(episode.file)

    return episode.file
}

function streamVideo(request, response) {
    const range = request.headers.range
    if (!range) {
        response.json(400).send("Requires range header.")
    }

    const videoFile = getFile(request.params.id, request.params.index)
    if (!videoFile) {
        response.json(400).send("Cannot find a video file.")
    }

    const videoSize = fs.statSync(videoFile).size

    const start = Number(range.replace(/\D/g, ""))
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1)

    const contentLength = end - start + 1
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    }

    response.writeHead(206, headers)

    const videoStream = fs.createReadStream(videoFile, { start, end })
    videoStream.pipe(response)
}

module.exports = {
    streamVideo,
}