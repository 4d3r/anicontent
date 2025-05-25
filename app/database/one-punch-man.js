const path = require('path')
const utils = {
    getIcon: require('../utils/getIcon'),
    getVideo: require('../utils/getVideo')
}

const id = path.basename(__filename, path.extname(__filename))

module.exports = {
    id: id,
    name: "Ванпанчмен",
    desc: "Да, я самый сильный, и что?",
    icon: utils.getIcon(id),
    series: [
        {name: "1"}
    ]
}