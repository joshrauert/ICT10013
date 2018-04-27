var arrValues = []
var afterupdate;
function start() {

while(arrValues.length < 8){
    var randomnumber = Math.ceil(Math.random()*100)
    if(arrValues.indexOf(randomnumber) > -1) continue;
    arrValues[arrValues.length] = randomnumber;
}
document.getElementById('Output').innerHTML = "Array values before the update:" + "<br>" + arrValues;

updateValues();
displayValues();
}

function updateValues() {

afterupdate = arrValues.map(arrValues => arrValues + 5)
}

function displayValues() {
document.getElementById('message').innerHTML = "Array values after the update:" + "<br>" + afterupdate
}
