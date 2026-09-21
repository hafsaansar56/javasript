var emptyMultiArray = [];
var emptySubArrays = [[], [], []];

var matrix = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];
console.log(matrix)

for(var i=1; i<11; i++){
    console.log(i)
}

let tableNumber =+prompt("Enter a number to print its multiplication table:");
let tableLength =+prompt("Enter length of multiplication table:");

if ((tableNumber) && (tableLength)) {
    console.log(`Multiplication table of ${tableNumber}`);
    console.log(`Length ${tableLength}\n`);

    for (var i = 1; i <= tableLength; i++) {
        console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
    }
} else {
    alert("Please enter valid numbers.");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`);
}
for (var i = 1; i <= 15; i++) {
    console.log(i)
}

for (var i = 10; i >= 1; i--) {
    console.log(i)
}

for (var i = 0; i <= 20; i += 2) {
    console.log(i)
}
for (var i = 1; i <= 19; i += 2) {
    console.log(i)

}for (var i = 2; i <= 20; i += 2) {
    console.log(i)
}
 
    var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

    var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");

    var flag = false;
    var index = -1;
    for (var i = 0; i < bakery.length; i++) {
        if (bakery[i] === userInput) {
            flag = true;
            index = i;
            break;
        }
    }

    if (flag) {
        alert(bakery[index] + " is available at index " + index + " in our bakery.");
    } else {
        alert("We are sorry. " + userInput + " is not available in our bakery.");
    }

    var A = [24, 53, 78, 91, 12];

    var largest = A[0];
    for (var i = 1; i < A.length; i++) {
        if (A[i] > largest) {
            largest = A[i];
        }
    }

    console.log("Array items: " + A.join(", "));
    console.log("The largest number is " + largest);
    alert("The largest number is " + largest);

    var num = [24, 53, 78, 91, 12];
    var smallest = num[0];
    for (var i = 1; i < num.length; i++) {
        if (num[i] < smallest) {
            smallest = num[i];
        }
    }
    console.log("Array items: " + num.join(", "));
    console.log("The smallest number is " + smallest);
    alert("The smallest number is " + smallest);

        var multiples = [];
            for (var i = 5; i <= 100; i += 5) {
            multiples.push(i);
        }
    
        console.log(multiples.join(", "));
        document.write("Multiples of 5 (1 to 100): <br>" + multiples.join(", "));