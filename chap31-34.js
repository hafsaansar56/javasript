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

