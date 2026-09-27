
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome.");

var favoritePhone = prompt("What is your favorite mobile phone model?");
var inputLength = favoritePhone.length;
document.write("My favorite phone is: " + favoritePhone + "<br>");
document.write("Length of string: " + inputLength + "<br>");

var word = "Pakistani";
var index = word.indexOf("n");
document.write("String: " + word + "<br>");
document.write("Index of 'n': " + index +"<br>");

var text = "Hello World";
var lastIndex = text.lastIndexOf("l");
document.write("String: " + text + "<br>");
document.write("Last index of 'l': " + lastIndex + "<br>");

var word = "Pakistani";
var character = word.charAt(3);
document.write("String: " + word + "<br>");
document.write("Character at index 3: " + character +"<br>");

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity +"<br>");

var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.replace(/and/g, "&");
document.write("Original message: " + message + "<br>");
document.write("After replacement: " + updatedMessage + "<br>");

var str = "472";
var num = Number(str);
document.write("Value: " + str + "<br>");
document.write("Type: " + typeof str + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num + "<br>");

var userInput = prompt("Enter any text:");
var upperCaseInput = userInput.toUpperCase();
document.write("User input: " + userInput + "<br>");
document.write("Upper case: " + upperCaseInput + "<br>");

var userInput = prompt("Enter any text:");
var words = userInput.toLowerCase().split(" ");
for (var i = 0; i < words.length; i++) {
  if (words[i].length > 0) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
}
var titleCaseInput = words.join(" ");
document.write("User input: " + userInput + "<br>");
document.write("Title case: " + titleCaseInput + "<br>");

var num = 35.36;
var numStr = num.toString();
var result = numStr.replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + result);

    var username = prompt("Enter your username:");
        var flag = true;
    
    if (username) {
      for (var i = 0; i < username.length; i++) {
        var code = username.charCodeAt(i);
        if (code === 33 || code === 44 || code === 46 || code === 64) {
          flag = false;
          break;
        }
      }
    }
      if (!flag || !username) {
      alert("Please enter a valid username without special symbols [@ . , !]");
    } else {
      document.write("Username saved successfully: " + username + "<br>");
    }
  
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
if (userInput) {
  var searchItem = userInput.toLowerCase();
    var flag = false;
  var itemIndex = -1;
  for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchItem) {
      flag = true;
      itemIndex = i;
      break;
    }
  }
  if (flag) {
    var successMsg = userInput + " is available at index " + itemIndex + " in our bakery.";
    alert(successMsg);
    document.write(successMsg);
  } else {
    var errorMsg = "We are sorry. " + userInput + " is not available in our bakery.";
    alert(errorMsg);
    document.write(errorMsg);
  }
}

var university = "University of Karachi";
var universityArray = university.split("");
for (var i = 0; i < universityArray.length; i++) {
  console.log(universityArray[i]);
}

var userInput = prompt("Enter any text:");
if (userInput) {
  var lastChar = userInput.charAt(userInput.length - 1);
  document.write("User input: " + userInput + "<br>");
  document.write("Last character of input: " + lastChar);
}

var text = "The quick brown fox jumps over the lazy dog";
var lowerText = text.toLowerCase();
var words = lowerText.split(" ");
var count = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === "the") {
    count++;
  }
}
document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'.");