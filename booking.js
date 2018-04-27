var advTypes=["BJ","RC","TS"];
var advNames=["Bungee Jump","Rock Climbing","Trapeze Swing"];
var advPrices=[120,90,150];
var lunchTypes=["E", "R", "S", "G"];
var lunchNames=["Economy", "Regular", "Special", "Gourmet"];
var lunchPrices=[5,10,16,27];
var lunchcode;
var advcode;
var numpeople;
var totalLunchPrice;
var totalAdvPrice;
var result1 = "";
var result2 = "";

function displayADVOptions() {
var adventureoptions = "";
for (var i in advTypes) {
  adventureoptions += [advTypes[i] + " - " + advNames[i] + " $" + advPrices[i]] + "<br>";
}
document.getElementById('Output').innerHTML = adventureoptions;
}

function addToOutput() {

}

function displayLunchOptions() {
  var lunchoptions = "";
  for (var i in lunchTypes) {
    lunchoptions += [lunchTypes[i] + " - " + lunchNames[i] + " $" + lunchPrices[i]] + "<br>";
}
document.getElementById('Output').innerHTML = lunchoptions;
}
function validateAndCalc() {

}

function validateName() {
var name =  document.getElementById('input1').value;
if (name.length > 0 && name.length <9) {
}
else {
  document.getElementById('Output').innerHTML = "Name must be between 1 and 8 characters in length.";
}
}

function validateNumberOfPeople() {
numpeople = document.getElementById('input4').value
if (isNaN(numpeople)) {
  numpeople = "Number of people must be numeric"
}
document.getElementById('Output').innerHTML = numpeople;

if (numpeople > 0 && numpeople <11) {
}
else {
  document.getElementById('Output').innerHTML = "Number of people must be in the range of 1-10";
}
}

function validateAdventureType() {
advcode = document.getElementById('input2').value;
var i = advTypes.indexOf(advcode);
if (i > -1) {
}
else {
document.getElementById('Output').innerHTML = "Invalid adventure type entered.";
}
}

function validateLunchType() {
  lunchcode = document.getElementById('input3').value;
  var i = lunchTypes.indexOf(lunchcode);
  if (i > -1) {
  }
  else {
  document.getElementById('Output').innerHTML = "Invalid adventure type entered.";
  }
}

function validateID() {
var result = "";
  var sellerID = document.getElementById('input5').value
  if (isNaN(sellerID)) {
    result += "Number of people must be numeric." + "<br>"
  }

  if (sellerID.length != 5) {
    result += "SellerID must be 5 digits in length.";
  }
    document.getElementById('Output').innerHTML = result;
  }


function validateCheckDigit() {

}

function calculateAdventurePrice() {
  advcode = document.getElementById('input2').value;
  if (advcode == 'BJ') {
      result1 = 120;
  } else if (advcode == 'RC') {
      result1 = 90;
  }  else if (advcode == 'TS'){
    result1 = 150;
  }

  numpeople = document.getElementById('input4').value
  totalAdvPrice = result1 * numpeople
  document.getElementById('Output').innerHTML = totalAdvPrice;
}

function calculateLunchPrice() {
  lunchcode = document.getElementById('input3').value;
  if (lunchcode == 'E') {
      result2 = 5;
  } else if (lunchcode == 'R') {
      result2 = 10;
  }  else if (lunchcode == 'S'){
    result2 = 16;
  } else if (lunchcode == 'G') {
      result2 = 27;
  }

  numpeople = document.getElementById('input4').value
  totalLunchPrice = result2 * numpeople
  document.getElementById('Output').innerHTML = totalLunchPrice;
}

function calculateTotalPayment() {

  advcode = document.getElementById('input2').value;
  if (advcode == 'BJ') {
      result1 = 120;
  } else if (advcode == 'RC') {
      result1 = 90;
  }  else if (advcode == 'TS'){
    result1 = 150;
  }

  numpeople = document.getElementById('input4').value
  totalAdvPrice = result1 * numpeople

  lunchcode = document.getElementById('input3').value;
  if (lunchcode == 'E') {
      result2 = 5;
  } else if (lunchcode == 'R') {
      result2 = 10;
  }  else if (lunchcode == 'S'){
    result2 = 16;
  } else if (lunchcode == 'G') {
      result2 = 27;
  }

  numpeople = document.getElementById('input4').value
  totalLunchPrice = result2 * numpeople

var totalPayment = totalLunchPrice + totalAdvPrice
document.getElementById('Output').innerHTML = totalPayment;
}
