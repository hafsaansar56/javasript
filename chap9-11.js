var city = prompt("Enter your city name:");
if (city === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome!");
}
var gender = prompt("Enter your gender (male/female):");
if (gender) {
    if (gender === "male") {
        alert("Good Morning Sir.");
    } else if (gender === "female") {
        alert("Good Morning Ma'am.");
    } else {
        alert("Good Morning!");
    }
}
var color = prompt("Enter traffic signal color (Red, Yellow, Green):");
if (color) {
    if (color === "red") {
        alert("Must Stop");
    } else if (color === "yellow") {
        alert("Ready to move");
    } else if (color === "green") {
        alert("Move now");
    } else {
        alert("Invalid traffic signal color");
    }
}
let fuel = prompt("Enter remaining fuel in car (in litres):");
if (fuel) {
    if (fuel < 0.25) {
        alert("Please refill the fuel in your car");
    } else {
        alert("Fuel level is sufficient");
    }
} else {
    alert("Please enter a valid number");
}
    
        var sub1 = prompt("Enter marks obtained in Subject 1:")
        var sub2 = prompt("Enter marks obtained in Subject 2:")
        var sub3 = prompt("Enter marks obtained in Subject 3:")
        var totalMarks =prompt("Enter total marks for all 3 subjects:")

        var obtainedMarks = sub1 + sub2 + sub3;
        var percentage = (obtainedMarks / totalMarks) * 100;

        var grade = "";
        var remarks = "";

        if (percentage >= 80) {
            grade = "A-one";
            remarks = "Excellent";
        } else if (percentage >= 70) {
            grade = "A";
            remarks = "Good";
        } else if (percentage >= 60) {
            grade = "B";
            remarks = "You need to improve";
        } else {
            grade = "Fail";
            remarks = "Sorry";
        }
        document.write("<h1>Marks Sheet</h1>");
        document.write("<br>Total marks : " + totalMarks);
        document.write("<br>Marks obtained : " + obtainedMarks);
        document.write("<br>Percentage : " +(2)/500*100 + "%");
        document.write("<br>Grade : " + grade);
        document.write("<br>Remarks : " + remarks);

var secretNum = 7;
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNum) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}
var num1 = prompt("Enter a number:");
num1 = Number(num1);
if ((num1) && num % 3 === 0) {
    alert("The number is divisible by 3.");
} else if (num1) {
    alert("The number is not divisible by 3.");
} else {
    alert("Please enter a valid number.");
}
let num2 = prompt("Enter a number:");
num2 = Number(num2);
if (num2) {
    if (num2 % 2 === 0) {
        alert(num2 + " is an even number.");
    } else {
        alert(num2 + " is an odd number.");
    }
} else {
    alert("Please enter a valid number.");
}
var temp = prompt("Enter temperature:")
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is very cold outside!");
}