const path = require('path')
const utils = {
    getIcon: require('../utils/getIcon'),
    getVideo: require('../utils/getVideo')
}

const id = path.basename(__filename, path.extname(__filename))

module.exports = {
    id: id,
    name: "Класс превосходства",
    desc: "Эти чертовы людишки не знают, что я самый главный манипулятор... Хех))",
    icon: utils.getIcon(id),
    series: [
        {name: "1"}
    ]
}