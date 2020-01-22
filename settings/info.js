
var os = require('os');
var date = require('date-and-time');
var versionString = require('child_process').execSync('ver').toString().trim()
module.exports = {
  getFormattedDate : function (sepStr1,sepStr2) {
   var d = new Date();
   var str = d.getDate() + sepStr1 + (d.getMonth()+1)  + sepStr1 + d.getFullYear()
                  + sepStr2+ d.getHours() + sepStr1 + d.getMinutes() + sepStr1 + d.getSeconds();
   return str;
  },
  getNewFormattedDateTime : function (){
    let now = new Date();
    return date.format(now, 'DD/MMM/YYYY/ HH:mm:ss [GMT]');
  },

  getNewFormattedDateTimeJunit : function (){
      let now = new Date();
    return date.format(now, 'YYYY-MMM-DD HH:mm:ss[Z]');
  },
  getFormattedNextDate : function (nextDate=0) {
      let d = new Date();
      let tomorrow = new Date();
      tomorrow.setDate(d.getDate()+nextDate);
    return [ date.format(tomorrow, 'DD-MMM-YYYY'), 
            date.format(tomorrow, 'DD/MM/YYYY')];
   },
   getFormattedNextTime : function (nextHour=0) {
        var d = new Date();
        var advHour = new Date();
        advHour.setHours(d.getHours()+nextHour)
      return  date.format(advHour, 'HH:mm:ss');
   },
   getFormattedNextDateTime : function (nextDate=0) {
      let d = new Date();
      let tomorrow = new Date();
      tomorrow.setDate(d.getDate()+nextDate);
  return [ date.format(tomorrow, 'DD-MMM-YYYY HH:mm:ss'),
          date.format(tomorrow, 'DD/MM/YYYY HH:mm:ss')];
 }    
}
// console.log(os.type());
// console.log(os.release());
// console.log(os.platform());
// console.log(versionString);