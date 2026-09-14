var num=3
var num1=5
console.log(num+num1)
var num=3
var num1=5
console.log(num-num1)
var num=3
var num1=5
console.log(num*num1)
var num=3
var num1=5
console.log(num%num1)
        var num1 = 10;
        var num2 = 5;

        console.log("Result of subtracting " + num2 + " from " + num1 + " is " + (num1 - num2));
        console.log("Result of multiplying " + num1 + " and " + num2 + " is " + (num1 * num2));
        console.log("Result of dividing " + num1 + " by " + num2 + " is " + (num1 / num2));
        console.log("Remainder of dividing " + num1 + " by " + num2 + " is " + (num1 % num2));
        console.log("--- Task 3 Starts Below ---");
        var myVar;
        console.log("Value after variable declaration is: " + myVar);
        myVar = 5;
        console.log("Initial value: " + myVar);
        myVar++;
        console.log("Value after increment is: " + myVar);
        myVar += 7;
        console.log("Value after addition is: " + myVar);
        myVar--;
        console.log("Value after decrement is: " + myVar);
        var remainder = myVar % 3;
        console.log("The remainder is : " + remainder);

        var ticketPrice = 600;
        var numberOfTickets = 5;
        var totalCost = ticketPrice * numberOfTickets;
        console.log("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");
        var num = 4;
        console.log("Table of " + num);
        console.log(num + "x1=" + (num * 1));
        console.log(num + "x2=" + (num * 2));
        console.log(num + "x3=" + (num * 3));
        console.log(num + "x4=" + (num * 4));
        console.log(num + "x5=" + (num * 5));
        console.log(num + "x6=" + (num * 6));
        console.log(num + "x7=" + (num * 7));
        console.log(num + "x8=" + (num * 8));
        console.log(num + "x9=" + (num * 9));
        console.log(num + "x10=" + (num * 10));

        var celsius = 25;
        var fahrenheitFromCelsius = (celsius * 9 / 5) + 32;
        console.log(celsius + "°C is " + fahrenheitFromCelsius + "°F");
        var fahrenheit = 70;
        var celsiusFromFahrenheit = (fahrenheit - 32) * 5 / 9;
        console.log(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");
    
        var priceItem1 = 650;
        var priceItem2 = 100;
        var quantityItem1 = 3;
        var quantityItem2 = 7;
        var shippingCharges = 100;
        var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
        console.log("Shopping Cart Receipt");
        console.log("Price of item 1 is " + priceItem1);
        console.log("Quantity of item 1 is " + quantityItem1);
        console.log("Price of item 2 is " + priceItem2);
        console.log("Quantity of item 2 is " + quantityItem2);
        console.log("Shipping Charges " + shippingCharges);
        console.log("Total cost of your order is " + totalCost);