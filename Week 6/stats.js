
function start() {
  var arrNums = [16,5,9,3,18,17,4,12,8,4,7,11,19,13,2,14];
    var text = "";
    var total = 0;
    var i = "";
    while (i < arrNums.length) {
        text = arrNums + "<br>";
        i++;
    }
    document.getElementById("msg").innerHTML = text;

while (i < arrNums.length) {
  total = total + arrNums[i];
  i++;
}
document.getElementById("msg1").innerHTML = i;

for (i = 0; i < arrNums.length; i++) {
  total += arrNums[i];
}
document.getElementById("msg2").innerHTML = total;

var NumAverage = total/arrNums.length;
document.getElementById("msg3").innerHTML = NumAverage;
}
