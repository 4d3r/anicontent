const path = require('path')

const id = path.basename(__filename, path.extname(__filename))

const videos = path.join('../videos/', id)
const images = path.join('../images/', id)

module.exports = {
    id: id,
    name: "Мой братик больше не братик!",
    desc: "Однажды, проснувшись, я понял, что стал женщиной - и это кошмар!",
    icon: path.join(images, 'Icon.jpg'),
    series: [
        {name: "1", video: path.join(videos, "1.mp4")}
    ]
}