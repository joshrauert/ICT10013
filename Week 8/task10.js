function start() {
  liststudents();
  displaystats();
}
var vStu1 = {id:"12345", name:"Dave Smith", testscore:10};
var vStu2 = {id:"43531", name:"Emma Black", testscore:17};
var vStu3 = {id:"97894", name:"Sue Davies", testscore:14};
var arrStudents = [vStu1, vStu2, vStu3];

function liststudents() {
  var text = "";
  var total = 0;
  var i;
for (i in arrStudents) {
  text += arrStudents[i].id + " " + arrStudents[i].name + " " + arrStudents[i].testscore + "<br>";
}
document.getElementById('Output').innerHTML = text;


}

function displaystats() {
  var text = "";
  var total = 0;
  var i = "";

while (i < arrStudents.length) {
total = total + arrStudents[i];
i++;
}
document.getElementById("msg1").innerHTML = "There are " + i + " values in the array.";

var testscore = "";
var i;
var total = 0;
for (i in arrStudents) {
  total += arrStudents[i].testscore;
}


document.getElementById("msg2").innerHTML = "The total of all test scores is " + total;

var AverageScore = total/i;
document.getElementById("msg3").innerHTML = "The average of all test scores is " +AverageScore;

}
