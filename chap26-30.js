var num=+prompt("Write any number")
var roundNum=Math.round(num)
var ceilNum=Math.ceil(num)
var floorNum=Math.floor(num)
console.log(roundNum)
console.log(ceilNum)
console.log(floorNum)

var userNum=prompt("Enter a negative floating point number")
var number=parseFloat(userNum)
var roundNumber=Math.round(number)
var ceilNumber=Math.ceil(number)
var floorNumber=Math.floor(number)
console.log(roundNumber)
console.log(ceilNumber)
console.log(floorNumber)

var input = prompt("Enter a number:")
var numbers = parseFloat(input)
var absoluteValue = Math.abs(numbers)
alert(`The absolute value of ${numbers} is ${absoluteValue}`)
console.log(`The absolute value of ${numbers} is ${absoluteValue}`)

var diceValue1 = Math.floor(Math.random() * 6) + 1
var diceValue2 = Math.floor(Math.random() * 6) + 1
console.log("random dice value: " + diceValue1)
console.log("random dice value: " + diceValue2)


var random =( Math.random() *2)  +1
console.log(Math.floor(random))
var userCoin = prompt("Enter heads or tails").toLowerCase()
var coins = Math.random() * 2
var toss = Math.floor(coins) + 1
var result =""
if (toss === 1) {
    result = "heads"
} else {
    result ="tails"
}
if(userCoin === result){
    console.log("You win! coin landed on ", result )
}else if(userCoin === "heads" || userCoin ==="tails"){
    console.log("You lose! coin landed on ", result )
}else{
    console.log("Invaild Input")
}

var randomNumber = Math.floor(Math.random() * 100) + 1
console.log("random number between 1 and 100: " + randomNumber)

var userInput = prompt("Enter your weight");
var weight = parseFloat(userInput);
console.log("The weight of user is " + weight + " kilograms")

var secretNumber = Math.floor(Math.random() * 10) + 1
var userGuess = parseInt(prompt("Guess a number between 1 and 10:"))
if (userGuess === secretNumber) {
    console.log("Congratulations! You guessed the correct secret number.")
} else {
    console.log("Sorry, wrong guess! The secret number was " + secretNumber + ".")
}