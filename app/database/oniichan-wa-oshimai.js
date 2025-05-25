const path = require('path')
const utils = {
    getIcon: require('../utils/getIcon'),
    getVideo: require('../utils/getVideo')
}

const id = path.basename(__filename, path.extname(__filename))

module.exports = {
    id: id,
    name: "Мой братик больше не братик!",
    desc: "Однажды, проснувшись, я понял, что стал женщиной - и это кошмар!",
    icon: utils.getIcon(id),
    series: [
        {name: "1"}
    ]
}