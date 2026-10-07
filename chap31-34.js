var today=new Date()
console.log(today)

var today = new Date()
var month = today.getMonth()
var monthNames = ["january","february","march","april","may","june","july","august","september","october","november","december"]
var getMonth = monthNames[month]
console.log(getMonth)

var currentDay = new Date().getDay()
if (currentDay === 0 || currentDay === 6) {
    alert("It's Fun day")
}

var currentDate = new Date().getDate()
if (currentDate < 16) {
    alert("First fifteen days of the month")
} else {
    alert("Last days of the month")
}

var date = new Date()
var minutesSince = date.getTime() / (1000 * 60)
console.log(minutesSince)

var currentHour = new Date().getHours()
if (currentHour < 12) {
    alert("Its AM")
} else {
    alert("Its PM")
}

var laterDateNum = new Date(2020, 11, 31)
console.log("Later Date:" ,laterDateNum)
var ramadanStart = new Date("June 18, 2015")
var currentDateOf = new Date()
var diffTime = currentDateOf.getTime() - ramadanStart.getTime()
var daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24))
console.log(daysPassed + " days have passed since 1st Ramadan, 2015")

var referenceDate = new Date()
var beginningOf2015 = new Date("January 1, 2015 00:00:00")
var diffInSeconds = Math.floor((referenceDate.getTime() - beginningOf2015.getTime()) / 1000)
document.write("On reference date " + referenceDate + ", <br>" + diffInSeconds + " seconds had elapsed since beginning of 2015")

var currentDate = new Date()
var currentHours = currentDate.getHours()
var Hours = currentDate.setHours(currentHours + 1)
console.log(currentDate)
document.write(currentDate)

var currentDate = new Date()
var year = currentDate.setFullYear(currentDate.getFullYear() - 100)
alert(currentDate)

var age = prompt("Please enter your age:")
var age = parseInt(age)
var currentYear = new Date().getFullYear()
var birthYear = currentYear - age
document.write("Your age is " + age + "<br>")
document.write("Your birth year is " + birthYear)

var customerName = "Hafsa Ansar"
var currentMonth = "October"
var numberOfUnits = 410
var chargesPerUnit = 35.50
var latePaymentSurcharge = 1500.00
var netAmount = numberOfUnits * chargesPerUnit
var grossAmount = netAmount + latePaymentSurcharge
var formattedCharges = chargesPerUnit.toFixed(2)
var formattedNetAmount = netAmount.toFixed(2)
var formattedSurcharge = latePaymentSurcharge.toFixed(2)
var formattedGrossAmount = grossAmount.toFixed(2)
document.write("<h1>K-Electric Bill</h1>")
document.write("<p><b>Customer Name:</b> " + customerName + "</p>")
document.write("<p><b>Current Month:</b> " + currentMonth + "</p>")
document.write("<p><b>Number of units:</b> " + numberOfUnits + "</p>")
document.write("<p><b>Charges per unit:</b> " + formattedCharges + "</p><br>")
document.write("<p><b>Net Amount Payable (within Due Date):</b> " + formattedNetAmount + "</p>")
document.write("<p><b>Late Payment Surcharge:</b> " + formattedSurcharge + "</p>")
document.write("<p><b>Gross Amount Payable (after Due Date):</b> " + formattedGrossAmount + "</p>")

