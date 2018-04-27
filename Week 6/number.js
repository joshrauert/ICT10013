function start() {
var arrNums = [18,23,20,17,21,18,22,19,18,20];
var total = 0;
var userInput1 = document.getElementById('userInput1').value;
var userInput2 = document.getElementById('userInput2').value;
for (var i = 0; i < arrNums.length; i++) {
    if(arrNums[i] >= userInput1 && arrNums[i] <= userInput2) {
         total++;
    }
}
document.getElementById("msg").innerHTML = total + " values exist in the array";
}
