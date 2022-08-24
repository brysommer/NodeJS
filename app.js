const moment = require('moment'); 

const time = moment().utcOffset(7);
console.log(time);