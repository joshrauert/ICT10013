var TicketType;
var TicketQty;
var TicketPrice;
var DiscountPercent;
var NettAmount;
var GrossAmount;
function calculateticket() {
TicketType = prompt("Please enter the type of ticket you require!").toUpperCase();
document.write("<br>");
TicketQty = prompt("Please enter the number of tickets you require!");
elsestatement();
TicketQty = parseInt(TicketQty);
document.write("Type of Ticket:" + TicketType);
document.write("<br>");
document.write("Number of Tickets:" + TicketQty);
document.write("<br>");
GrossAmount =(TicketPrice) * (TicketQty);
document.write("Gross Amount is: $" + GrossAmount);
GrossAmount = parseInt(GrossAmount);
discountAmt();
var NettAmount = (GrossAmount) - (GrossAmount) * (DiscountPercent);
var DiscountAmount = (GrossAmount) * (DiscountPercent);
DiscountPercent = (DiscountPercent) *100;
document.write("<br>");
document.write("Discount Amount: $" + DiscountAmount);
document.write("<br>");
document.write("Discount Percent:" + DiscountPercent + "%");
document.write("<br>");
document.write("Nett Amount: $" + NettAmount);
}


function elsestatement(){
    if (TicketType == 'A') {
        TicketPrice = 100;
    } else if (TicketType == 'B') {
        TicketPrice = 75;
    }  else if (TicketType == 'C'){
      TicketPrice = 50;
    }
    else {
        document.write("<br>");
        document.write("Invalid Ticket Type");
        document.write("<br>");
    }
    if (TicketQty <1|| TicketQty >100) {
    document.write("Invalid Quantity")}
    }

function discountAmt() {
if (GrossAmount <200) {
  DiscountPercent = '0';
}  else if (GrossAmount >= 200 && GrossAmount<=399.99) {
   DiscountPercent = '.05';
}  else if (GrossAmount>=400 && GrossAmount<=599.99 ) {
   DiscountPercent = '.075';
}  else if (GrossAmount >=600)
   DiscountPercent = '.1';
  }
