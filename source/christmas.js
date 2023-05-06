function christmas() {
    var moment = require('moment') 

    var today = new Date(); //today's date
    var christmas = new Date(today.getFullYear(), 12, 25) //christmas

    if (today.getMonth() + 1 == 12 && today.getDate() == 25) {
        christmas = new Date(today.getFullYear() + 1, 12, 25)
    }

    var mtoday = moment(today)
    var mchristmas = moment(christmas)

    var days = mchristmas.diff(mtoday, 'days')

    return days;
}

module.exports = { christmas }