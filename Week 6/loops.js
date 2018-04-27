var arrNums = [4,15,10,7,6,23,1,18,8,45,-5,16,9,68];

function whilefunction() {
    var text = "";
    var i = 0;
    while (i < arrNums.length) {
        text = arrNums + "<br>";
        i++;
    }
    document.getElementById("msg1").innerHTML = text;
}

function forfunction() {
  var text = "";
  var i = 0;
  for (i = 0; i < arrNums.length; i++) {
    text = arrNums + "<br>";
    arrNums.reverse();
}

document.getElementById("msg2").innerHTML = text;
}
