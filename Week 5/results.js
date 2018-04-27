function start() {
var StudentName = document.forms["Results"]["StudentName"].value;
var StudentNameID = document.forms["Results"]["StudentNameID"].value;
var TestScore4 = document.forms["Results"]["TestScore4"].value;
var TestScore5 = document.forms["Results"]["TestScore5"].value;
var TestScore6 = document.forms["Results"]["TestScore6"].value;
var NameID = "";
var StudentID = "";
var TestScore1 = "";
var TestScore2 = "";
var TestScore3 = "";
ValidateScore();
CalcGrade();
var checklength = StudentName.length;
ValidateName();
console.log(checklength, checklength < 100)
var checkIDlength = StudentNameID.length;
ValidateID();
console.log(checkIDlength, checkIDlength < 100)
return false;

function ValidateScore(){
  if (isNaN(TestScore4)) {
    TestScore1 = "Score is not Numeric"

  }
  document.getElementById('TestScore1').innerHTML = TestScore1
  return false;

  if (TestScore4 >0 && TestScore4 <=20)
  {

  }
  else{
      TestScore1 = "Score is not in Valid Range"
  }
  document.getElementById('TestScore1').innerHTML = TestScore1
  return false;

  if (isNaN(TestScore5)) {
    TestScore2 = "Score is not Numeric"

  }
  document.getElementById('TestScore2').innerHTML = TestScore2
  return false;

  if (TestScore5 >0 && TestScore5 <=20)
  {

  }
  else{
      TestScore2 = "Score is not in Valid Range"
  }
  document.getElementById('TestScore2').innerHTML = TestScore1
  return false;

  if (isNaN(TestScore6)) {
    TestScore3 = "Score is not Numeric"

  }
  document.getElementById('TestScore3').innerHTML = TestScore3
  return false;

  if (TestScore6 >0 && TestScore6 <=20)
  {

  }
  else{
      TestScore3 = "Score is not in Valid Range"
  }
  document.getElementById('TestScore3').innerHTML = TestScore3
  return false;
}

function ValidateName(){
if (checklength >0 && checklength <21)
{
NameID = "Ok"
}
else{
NameID = "Invalid Name Length";
}

document.getElementById('NameID').innerHTML = NameID;
return false;
}


function ValidateID(){
  StudentNameID=StudentNameID.toUpperCase();
if (checkIDlength !=6)
{
StudentID = "Invalid Student ID Length"

document.getElementById('StudentID').innerHTML = StudentID
return false;
}

if (ID.indexOf('PG') === 0 || ID.indexOf('UG') === 0) {
  StudentID = "Ok"
  document.getElementById('StudentID').innerHTML = StudentID
  return false;
}
else {
StudentID = "Invalid Student ID Type"
document.getElementById('StudentID').innerHTML = StudentID
return false;

}
if (isNaN(StudentNameID.length !=4))
{
StudentID = "Invalid Student ID Digits";
document.getElementById('StudentID').innerHTML = StudentID
return false;

}
else{
StudentID = "OK"
document.getElementById('StudentID').innerHTML = StudentID
return false;
}

}



function CalcGrade(){
  if (TestScore4 >=1 && TestScore4 <10) {
    TestScore1 = "Fail";
  }  else if (TestScore4 >= 10 && TestScore4 <15) {
    TestScore1 = "Pass";
  }  else if (TestScore4 >=15 && TestScore4 <=20) {
     TestScore1 = "Distinction"

  }
  else{
    TestScore1 = "Something is Wrong"
  }
  document.getElementById('TestScore1').innerHTML = TestScore1

  if (TestScore5 >=1 && TestScore5 <10) {
    TestScore2 = "Fail";
  }  else if (TestScore5 >= 10 && TestScore5 <15) {
    TestScore2 = "Pass";
  }  else if (TestScore5 >=15 && TestScore5 <=20) {
     TestScore2 = "Distinction"

  }
  else{
    TestScore2 = "Something is Wrong"
  }
  document.getElementById('TestScore2').innerHTML = TestScore2

  if (TestScore6 >=1 && TestScore6 <10) {
    TestScore3 = "Fail";
  }  else if (TestScore6 >= 10 && TestScore6 <15) {
    TestScore3 = "Pass";
  }  else if (TestScore6 >=15 && TestScore6 <=20) {
     TestScore3 = "Distinction"

  }
  else{
    TestScore3 = "Something is Wrong"
  }
  document.getElementById('TestScore3').innerHTML = TestScore3

    }

}
