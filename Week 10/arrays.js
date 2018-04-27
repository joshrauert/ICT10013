function start() {
 document.getElementById("task").innerHTML="Task 4";
 var arrNames = [];
 var arrToys = [];
 var vName = "";
 var vToy = "";
 vName = prompt("Enter a name (leave blank to stop)");
 while (vName.length > 0) {
 arrNames.push(vName);
 vName = prompt("Enter a name (leave blank to stop)");
 }
 vToy = prompt("Enter Toy Number (leave blank to stop)");
 while (vToy.length > 0) {
 arrToys.push(vToy);
 vToy = prompt("Enter Toy Number (leave blank to stop)");
 }
 document.getElementById('output').innerHTML = "List of all dogs and number of toys: " + "<br>" + arrNames.join("<br>") + arrToys.join("<br>");

 }
