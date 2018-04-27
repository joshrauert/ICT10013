var vTicketType;
var vTicketQty;
var vTicketPrice;
function calcTotal() {
vTicketType = prompt("Please enter the type of ticket you require!").toUpperCase();
document.write("<br>");
vTicketQty = prompt("Please enter the number of tickets you require!");
calcPrice();
vTicketQty = parseInt(vTicketQty);
document.write("<br>");
document.write("Type of Ticket:" + vTicketType);
document.write("<br>");
document.write("Number of Tickets:" + vTicketQty);
document.write("<br>");
var vTotalPayment =(vTicketPrice) * (vTicketQty);
if (vTotalPayment >0) {
document.write("Total Payment is: $" + vTotalPayment);
    vTicketPrice = parseInt(vTicketPrice);
  } else {
    document.write("invalid data supplied")
  }
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
