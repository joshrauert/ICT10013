var arrNames = [];
var vReturnValue;

function start() {
var vName = "Character List";
var i = arrNames.length

if (vReturnValue.trim() === "") {
vName = "Name: Empty"

}
  document.getElementById('ErrorOutput').innerHTML = vName
  while (i--) {
  document.getElementById('Output').innerHTML = arrNames[i] + "<br/>" + document.getElementById('Output').innerHTML;
}
}

function addName() {

  vReturnValue = document.getElementById('custname').value;
  arrNames.push(vReturnValue);
}
