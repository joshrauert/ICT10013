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


var longestWord = {word: '', len: 0};

arrNames.forEach(w => {
if (longestWord.len < w.length) {
longestWord.text = w;
longestWord.len = w.length;
}
});

document.getElementById('ErrorOutput').innerHTML = "The longest name in the array is " + longestWord.len + " characters";

}

function addName() {

  vReturnValue = document.getElementById('custname').value;
  arrNames.push(vReturnValue);


}

function findName() {
  var nameExists = arrNames.indexOf(vReturnValue) < 0
  ? 'The number ' + vReturnValue + ' does not exist in the array'
   : 'The number ' + vReturnValue + ' exists in the array'

 document.getElementById('nameExists').textContent = nameExists
}
