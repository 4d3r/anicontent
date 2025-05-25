const path = require('path')
const utils = {
    getIcon: require('../utils/getIcon'),
    getVideo: require('../utils/getVideo')
}

const id = path.basename(__filename, path.extname(__filename))

module.exports = {
    id: id,
    name: "Сага о Винланде",
    desc: "Чертовы викинги с 5 миллионами мощи, я вам еще покажу!!!",
    icon: utils.getIcon(id),
    series: [
        {name: "1"}
    ]
}