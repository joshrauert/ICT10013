function start() {
var arrNums = [18,23,20,17,21,18,22,19,18,20];
var search = document.getElementById("search");
var userInput = document.getElementById("userInput").value;

if(arrNums.indexOf(parseInt(userInput)) != -1) {
  userInput = "The number " + userInput + " exists in the array"
         document.getElementById("msg").innerHTML = userInput;
         return;
     }
     userInput = "The number " + userInput + " does not exist in the array"
  document.getElementById("msg").innerHTML = userInput;
};
