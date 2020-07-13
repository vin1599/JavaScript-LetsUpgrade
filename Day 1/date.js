
var day,hour,min,sec;
var today = new Date()
day = today.getDay()
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
hour = today.getHours();
min = today.getMinutes();
sec = today.getSeconds();
document.write("Today : " + daylist[day]);
var hours = hour >12 ? (hour - 12) +" PM": hour +"AM"
document.write("<br/>")
document.write("Current Time : "+ hours +" : "+min+" : "+ sec)

function myFunction(){
    var dd = today.getDate();
    var mm = today.getMonth();
    var yy = today.getFullYear();
    dd = dd< 10 ? "0"+dd:dd;
    mm = mm<10? "0"+mm:mm;
    document.getElementById("demo").innerHTML=(dd+"/"+mm+"/"+yy);
}
