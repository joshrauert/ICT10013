function start() {
  var TicketType = document.forms["Tickets"]["TicketType"].value;
  var TicketNumber = document.forms["Tickets"]["TicketNumber"].value;
  var TicketPrice;
  var msg = "";

  if ( !( TicketType == 'A' || TicketType == 'B' || TicketType == 'C' ) ) {
    msg = "Invalid Ticket Type";
  }else{
    if (TicketType == 'A') {
      TicketPrice = 30;
    } else if (TicketType == 'B') {
      TicketPrice = 20;
    }  else if (TicketType == 'C'){
      TicketPrice = 10;
    }
    TicketPrice = (TicketPrice) * (TicketNumber)
    msg = "Ticket Type: " + TicketType + "<br/>" +
    "Number of Tickets: " + TicketNumber + "<br/>" +
    "Price of Tickets: $" + TicketPrice;



  }

  if (isNaN(TicketNumber)) {
    msg = "Non Numeric Quantity has been Entered";
  }

  if (TicketNumber >0 && TicketNumber <101)
  {

  }
  else{
    msg = "Quantity is Outside Valid Range";
  }

  document.getElementById('msg').innerHTML = msg;
  return false;
}
