var TestScore1;
TestScore1 = prompt("Please enter the first test score.");
var TestScore2;
TestScore2 = prompt("Please enter the second test score.");
var TestScore3
TestScore3 = prompt("Please enter the third test score.");
var TotalScore = Number(TestScore1) + Number(TestScore2) + Number(TestScore3);
var TotalAverage = Number(TotalScore)/3;
var Result=Math.round(TotalAverage*100)/100
document.write("Test score 1: " + TestScore1);
document.write("<br>");
document.write("Test score 2:" + TestScore2);
document.write("<br>");
document.write("Test score 3:" + TestScore3);
document.write("<br>");
document.write("The sum of all scores is:" + TotalScore);
document.write("<br>");
document.write("The average of all scores is:" + Result);

