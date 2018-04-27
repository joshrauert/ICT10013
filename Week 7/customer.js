function processString() {
  var vName = "Character List";
  vReturnValue = document.getElementById('input').value;
  var i = vReturnValue.length

  if (vReturnValue.trim() === "") {
  vName = "Name: Empty"

}
  document.getElementById('Output.').innerHTML = vName
  while (i--) {



  document.getElementById('Output').innerHTML = vReturnValue[i] + "<br/>" + document.getElementById('Output').innerHTML;


}
}
