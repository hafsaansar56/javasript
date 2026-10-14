var today=new Date()
document.write(today,"<br>")

function greetUser(firstName, lastName) {
    document.write(`Hello, ${firstName} ${lastName}! Welcome, great to see you.`)
}
var greeting = greetUser("Ahmad", "Khan");
console.log(greeting) 

function addNumbers(num1, num2) {
    return num1 + num2
}
var sum = addNumbers(5, 10)
console.log(sum)

function square(num) {
    return num * num;
}
console.log(square(4))
console.log(square(5))

function computeFactorial(n) {
    if (n < 0) {
        console.log("Error: Factorial of a negative number does not exist.")
    }
    
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i
    }
    return result
}
console.log(computeFactorial(5))
console.log(computeFactorial(0))

function displayCounting(start, end) {
    var result = ""
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            result += i + " "
        }
    } else {
        for (var i = start; i >= end; i--) {
            result += i + " "
        }
    }
    document.write("<h3>Counting: " + result + "</h3>")
}
displayCounting(1, 10)

function calculateHypotenuse(base, perpendicular) {
        function calculateSquare(num) {
        return num * num;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);

    return hypotenuse;
}
var result = calculateHypotenuse(3, 4)
console.log("Hypotenuse is: " + result)

function palindrome(str){
var reverse = ""
for(var i= str.length-1; i>=0; i--){
    reverse =reverse+str[i]
}
console.log(str, reverse)
if(reverse===str){
    console.log(str+" is a palindrome word")
}else{
    console.log(str+" is not a palindrome word")
}
}
var string = prompt("Enter a word").toLowerCase()
palindrome(string)

function upperCaseFirstLetter(str) {
    let result = ''
    let capitalizeNext = true
    for (var i = 0; i < str.length; i++) {
        var char = str[i]
        if (char === ' ') {
            capitalizeNext = true
            result += char;
        } else if (capitalizeNext) {
            result += char.toUpperCase()
            capitalizeNext = false
        } else {
            result += char
        }
    }
    return result;
}
console.log(upperCaseFirstLetter('the quick brown fox'))

function findLongestWord(string) {
    var words = string.split(' ')
    var longestWord = ''
    for (var word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}
var exampleString = 'Web Development Tutorial'
console.log(findLongestWord(exampleString))

function countLetter(str, letter) {
    var count = 0
        for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++
        }
    }
    return count
}
console.log(countLetter('JSResourceS.com', 'o'))

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference}`)
}
function calcArea(radius) {
    var area = Math.PI * radius * radius
    console.log(`The area is ${area}`)
}
calcCircumference(5)
calcArea(5)
