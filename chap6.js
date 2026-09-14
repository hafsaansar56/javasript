var a = 10
console.log("Result:");
console.log("The value of a is: " + a);
console.log("The value of ++a is: " + (++a));
console.log("Now the value of a is: " + a);
console.log("The value of a++ is: " + (a++));
console.log("Now the value of a is: " + a);
console.log("The value of --a is: " + (--a));
console.log("Now the value of a is: " + a);
console.log("The value of a-- is: " + (a--));
console.log("Now the value of a is: " + a);
var a = 2
var b=1
console.log(--a - --b + ++b + b--)
// 1  -  0  +  1  +  1
console.log("result of ab is 3")

var userName = prompt("Please enter your name:");
if (userName) {
    console.log("Hello, " + userName + "! Welcome.");
}
var userInput = prompt("Enter a number to see its multiplication table:", "5");
var num = (userInput);
if (num) {
    num = 5;
}
console.log("Multiplication Table of " + num);
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


var subject1 = "English";
var subject2 = "Math";
var subject3 = "Urdu";
var totalMarksPerSubject = 100;
var obtainedMarks1 = 54; 
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");
var grandTotal = totalMarksPerSubject * 3;
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var overallPercentage = (totalObtainedMarks / grandTotal) * 100;
var percentage1 = (obtainedMarks1 / totalMarksPerSubject) * 100;
var percentage2 = (obtainedMarks2 / totalMarksPerSubject) * 100;
var percentage3 = (obtainedMarks3 / totalMarksPerSubject) * 100;
console.log("Subject 1 Marks:", obtainedMarks1);
console.log("Subject 2 Marks:", obtainedMarks2);
console.log("Subject 3 Marks:", obtainedMarks3);
console.log("Total Obtained Marks:", totalObtainedMarks);
console.log("Percentage:", overallPercentage ,(2) + "%");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks1 + "</td><td>" + percentage1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks2 + "</td><td>" + percentage2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarks3 + "</td><td>" + percentage3 + "%</td></tr>");
document.write("<tr><th></th><th>" + grandTotal + "</th><th>" + totalObtainedMarks + "</th><th>" + overallPercentage ,(2) + "%</th></tr>");
document.write("</table>");