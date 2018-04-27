var vTicketType;
var vTicketQty;
var vTicketPrice;
function calctotal() {
vTicketType = prompt("Please enter the type of ticket you require!").toUpperCase();
document.write("<br>");
vTicketQty = prompt("Please enter the number of tickets you require!");
calcPrice();
vTicketQty = parseInt(vTicketQty);
document.write("Type of Ticket:" + vTicketType);
document.write("<br>");
document.write("Number of Tickets:" + vTicketQty);
document.write("<br>");
var TotalPayment =(vTicketPrice) * (vTicketQty);
document.write("Total Payment is: $" + TotalPayment);
    TicketPrice = parseInt(vTicketPrice);
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
        vTicketType = "Invalid Ticket Type"
    }
    {
      if (vTicketQty <1|| vTicketQty >100)
      vTicketQty = "Invalid Ticket Quantity"
    }
}
