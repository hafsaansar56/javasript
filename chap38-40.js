// function withdrawer(cashier){
//     var num100=cashier/100
//     var num50=cashier/50
//     var num10=cashier/10
//     var remaining=
// // }

// function calculateCurrencyNotes(inputInHundreds) {
//     var totalAmount = inputInHundreds * 100
//     var notes100 = Math.floor(totalAmount / 100)
//     totalAmount %= 100
//     var notes50 = Math.floor(totalAmount / 50)
//     totalAmount %= 50
//     var notes10 = Math.floor(totalAmount / 10)
//     console.log(`Denomination of 100 notes: ${notes100}`)
//     console.log(`Denomination of 50 notes:  ${notes50}`)
//     console.log(`Denomination of 10 notes:  ${notes10}`)
// }
// var amount=+prompt("Enter your amount")
// calculateCurrencyNotes(amount)


// function calculateOvertimePay(hoursWorked) {
//     var standardHours = 40
//     var overtimeRate = 12.00
//     var overtimePay = 0
//     if (hoursWorked > standardHours) {
//         var overtimeHours = hoursWorked - standardHours
//         overtimePay = overtimeHours * overtimeRate
//         console.log(`Total Extra Hours: ${overtimeHours}`)
//         console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`)
//     } else {
//         console.log("No overtime pay (Hours worked are 40 or less).")
//     }
// }
// var hours=prompt("Enter your hours")
// calculateOvertimePay(hours)

// function power(a, b) {
//     var result = 1
//         if (b === 0) {
//         return 1
//     }
//         var absB = Math.abs(b);
//         for (var i = 1; i <= absB; i++) {
//         result = result * a
//     }
//         if (b < 0) {
//         return 1 / result
//     }

//     return result
// }
// var inputA = prompt("Base (a) enter karein (jaise 2, 5, etc.):")
// var inputB = prompt("Exponent / Power (b) enter karein (jaise 3, -2, 0):")
// var a = parseFloat(inputA)
// var b = parseInt(inputB)
// if (isNaN(a) || isNaN(b)) {
//     alert("Meherbani karke koi valid number enter karein!")
// } else {
//     var finalAnswer = power(a, b)
//         console.log(a + " raised to the power " + b + " = " + finalAnswer)
//     console.log(`${a}  ki power ${b} ka answer hai:  ${finalAnswer}`)
// }


// function checkLeapYear(year) {
//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//         return true
//     } else {
//         return false
//     }
// }
// var inputYear = prompt("Koi bhi saal (year) enter karein")
// var year = parseInt(inputYear);
// if (isNaN(year)) {
//     alert("Meherbani karke ek valid number enter karein!")
// } else {
//     if (checkLeapYear(year)) {
//         console.log(year + " ek Leap Year hai! (366 days)")
//         alert(year + " ek Leap Year hai!")
//     } else {
//         console.log(year + " Leap Year nahi hai. (365 days)")
//         alert(year + " Leap Year nahi hai.")
//     }
// }