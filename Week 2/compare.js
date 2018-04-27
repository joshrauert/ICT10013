function CompareNumbers() {
  var FirstNum;
  FirstNum = prompt("Please enter your first number - Note: whole numbers only!");
  var FirstNum = parseInt(FirstNum);
  var SecondNum;
  SecondNum = prompt("Please enter your second number - Note: whole numbers only!");
  var SecondNum = parseInt(SecondNum);
  var FinalNum = Number(FirstNum) * Number(SecondNum);
  document.write("The first number you entered was: " + FirstNum);
  document.write("<br>");
  document.write("The second number you entered was: " + SecondNum);
  document.write("<br>");
  if (FirstNum > SecondNum) {
    document.write(FirstNum + " is greater than " + SecondNum);
  } else if (SecondNum > FirstNum) {
    document.write(SecondNum + " is greater than " + FirstNum);
  } else if (FirstNum = SecondNum) {
    document.write(FirstNum + " and " + SecondNum + " are identical.");
  }
}
