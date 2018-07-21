function printDate() {
  var d = new Date();
  var month = d.getMonth();
  var date = d.getDate();
  var day = d.getDay();
  document.getElementById("currentdate").innerHTML = "day + date+ "," + month";
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '.' + dd + '.' + yyyy;
document.write(today);