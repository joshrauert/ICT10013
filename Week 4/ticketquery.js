var vTicketType;
var vTicketQty;
var vTicketPrice;
var vGrossPayment;
var vDiscountPercent;
var vNettPayment;
var vDiscountAmount;
function calcTotal() {
vTicketType = prompt("Please enter the type of ticket you require!").toUpperCase();
document.write("<br>");
vTicketQty = prompt("Please enter the number of tickets you require!");
calcPrice();
vTicketQty = NaN(parseInt(vTicketQty));
document.write("<br>");
document.write("Type of Ticket:" + vTicketType);
document.write("<br>");
document.write("Number of Tickets:" + vTicketQty);
document.write("<br>");
vGrossPayment =(vTicketPrice) * (vTicketQty);
if (vGrossPayment >0) {
document.write("Gross Payment is: $" + vGrossPayment);
    vTicketPrice = parseInt(vTicketPrice);
  } else {
    document.write("invalid data supplied")
  }
calcDiscountPercent();
vDiscountPercent = (vDiscountPercent) *100;
document.write("<br>");
document.write("Discount Percent: " + vDiscountPercent + "%")
calcDiscountAmount();
document.write("<br>");
document.write("Discount Amount: $" + vDiscountAmount)
ApplyDiscount();
document.write("<br>");
document.write("Nett Payment: $" + vNettPayment)
}

function ApplyDiscount(){
  vNettPayment = (vGrossPayment) - (vGrossPayment) * (vDiscountPercent);
}

function calcDiscountAmount(){
  vDiscountPercent = (vDiscountPercent) /100;
  vDiscountAmount = (vGrossPayment) * (vDiscountPercent);
}

function calcDiscountPercent(){
  if (vGrossPayment <200) {
    vDiscountPercent = '0';
  }  else if (vGrossPayment >= 200 && vGrossPayment <=399.99) {
     vDiscountPercent = '.05';
  }  else if (vGrossPayment>=400 && vGrossPayment <=599.99 ) {
     vDiscountPercent = '.075';
  }  else if (vGrossPayment >=600)
     vDiscountPercent = '.1';
    }

function NaN(vTicketQty) {
    if (isNaN(vTicketQty)) {
        return 0;
    }
    return vTicketQty;
}

function calcPrice(){
    if (vTicketType == 'A') {
        vTicketPrice = 100;
    } else if (vTicketType == 'B') {
        vTicketPrice = 75;
    }  else if (vTicketType == 'C'){
      vTicketPrice = 50;
    }
    else {
        vTicketPrice = -1;
    }
}
