exports.age = function(year, month, day) {
    var moment = require('moment')

    var birthday = new Date(year, month, day) // person's birthday
    var today = new Date() //today's date

    var mbirthday = moment(birthday)
    var mtoday = moment(today)

    var age = mtoday.diff(mbirthday, 'years')

    return age
}