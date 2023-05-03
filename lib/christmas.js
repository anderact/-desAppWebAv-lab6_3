exports.christmas = function(){
    var moment = require('moment') 
    var today = new Date(); //fecha actual
    // function whenChristmas(today) {
    //     if (today.getMonth() + 1 == 12 && today.getDate() == 25) {
    //         var christmas = new Date(today.getFullYear() + 1, 12, 25)
    //     }
    //     var christmas = new Date(today.getFullYear(), 12, 25)
    //     return christmas;
    // }
    var christmas = new Date(today.getFullYear(), 12, 25)

    if (today.getMonth() + 1 == 12 && today.getDate() == 25) {
        christmas = new Date(today.getFullYear() + 1, 12, 25)
    }

    var mtoday = moment(today)
    var mchristmas = moment(christmas)

    var days = mchristmas.diff(mtoday, 'days')

    return days;
};