var garrCust = [];

function listcust() {
  var totalamount = 0;
  var Gather = ' ';
  for (var i = 0; i < garrCust.length; i++) {

    Gather += "Name: " + garrCust[i].customerName + " -  Customer ID: " + garrCust[i].customerID + " -  Amount Due:  $" + garrCust[i].AmountDue + "<br>";
    totalamount += parseInt(garrCust[i].AmountDue);
  }
  document.getElementById('output').innerHTML = Gather + "<br/>" + document.getElementById('output').innerHTML;
  document.getElementById('totalamount').innerHTML = "Total amount is equal to: $" + totalamount
}

function addcust() {

  var total = 0;
  var i = "";

  while (i < garrCust.length) {
  total = total + garrCust[i];
  i++;
  }
  document.getElementById('output').innerHTML = "Customer Added. Total customers is now " + i;
  garrCust.push({
    customerName: document.getElementById('custName').value,
    customerID: document.getElementById('CustID').value,
    AmountDue: document.getElementById('Amount').value
  });

}
