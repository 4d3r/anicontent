const path = require('path')
const utils = {
    getIcon: require('../utils/getIcon'),
    getVideo: require('../utils/getVideo')
}

const id = path.basename(__filename, path.extname(__filename))

module.exports = {
    id: id,
    name: "Этот замечательный мир!",
    desc: "Я иссекайнулся в какой-то дыре и теперь у менять есть гарем из тупоголовых баб!",
    icon: utils.getIcon(id),
    series: [
        {name: "1"}
    ]
}