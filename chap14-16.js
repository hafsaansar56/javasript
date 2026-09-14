var studentNames1 = ["hafsa"];
console.log("1. Empty Array (Literal):", studentNames1);
var studentNames2 = new Array();
console.log("2. Empty Array (Object):", studentNames2);
var fruits = ["Apple", "Banana", "Orange"];
console.log("3. String Array:", fruits);
var scores = [85, 92, 78];
console.log("4. Number Array:", scores);
var status = [true, false, true];
console.log("5. Boolean Array:", status);
var mixData = ["Ali", 25, true];
console.log("6. Mixed Array:", mixData);
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
console.log("--- Educational Qualifications ---");
if (qualifications.length > 0) {
    document.write("<h1>Qualifications:</h1>");
    document.write("<ol>");
} else {
    document.write("<p>Koi qualification nahi mili.</p>");
    console.log("Array khali hai.");
}
var names = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var total = 500;
var perc1 = (scores[0] / total) * 100;
document.write("<p>Score of " + names[0] + " is " + scores[0] + ". Percentage: " + perc1 + "%</p>");
var perc2 = (scores[1] / total) * 100;
document.write("<p>Score of " + names[1] + " is " + scores[1] + ". Percentage: " + perc2 + "%</p>");
var perc3 = (scores[2] / total) * 100;
document.write("<p>Score of " + names[2] + " is " + scores[2] + ". Percentage: " + perc3 + "%</p>");

var colors = ["Red", "Green", "Blue"];
console.log("Initial Array:", colors);
var addFirst = prompt("Enter a color name to add to the beginning:");
colors.unshift(addFirst);
console.log("a. Added to Beginning:", colors);
var addLast = prompt("Enter a color name to add to the end:");
colors.push(addLast);
console.log("b. Added to End:", colors);
colors.unshift("Purple", "Orange");
console.log("c. Added Two Colors to Beginning:", colors);
colors.shift();
console.log("d. Deleted First Color:", colors);
colors.pop();
console.log("e. Deleted Last Color:", colors);
var addIndex = prompt("At which index do you want to add a color?");
var addColorName = prompt("Enter the color name:");
colors.splice(addIndex, 0, addColorName);
console.log("f. Added Color at Index " + addIndex + ":", colors);
var delIndex = prompt("At which index do you want to delete color(s)?");
var delCount = prompt("How many colors do you want to delete?");
colors.splice(delIndex, delCount);
console.log("g. Deleted " + delCount + " Color(s) from Index " + delIndex + ":", colors);
document.write("<br><b>Updated Array after deleting " + delCount + " color(s) from index " + delIndex + ":</b><br>" + colors.join(", "));
console.log("Updated Array:", colors);

var studentScore = [320, 230, 480, 120]
studentScore.sort()
console.log(studentScore)

var cityName = ["Karachi", "Lahore", "Islamabd", "Quetta", "Peshawar"]
var newCity = cityName.slice(1,4)
console.log(newCity)

var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log("Array:", arr);
console.log("String:", singleString);
document.write("<h3>Array:</h3> " + arr + "<br>");
document.write("<h3>String:</h3> " + singleString);