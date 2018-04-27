function calculategrade() {
  var FinalScore;
  FinalScore = prompt("Please enter a final score for a unit you are studying - Note: whole numbers only!");
  var FinalScore = parseInt(FinalScore);
  document.write("The final score you entered was: " + FinalScore);
  document.write("<br>");
  if (FinalScore > 100) {
    document.write("Invalid - Value too high");
  } else if (FinalScore >=80 && FinalScore <101) {
    document.write("You have achieved the grade: High Distinction");
  } else if (FinalScore >=70 && FinalScore <80) {
    document.write("You have achieved the grade: Distinction");
  } else if (FinalScore >=60 && FinalScore <70) {
    document.write("You have achieved the grade: Credit");
  } else if (FinalScore >=50 && FinalScore <60) {
    document.write("You have achieved the grade: Pass");
  } else if (FinalScore >=0 && FinalScore <49) {
    document.write("You have failed this course");
  } else if (FinalScore <0) {
    document.write("INVALID");
  }
}
