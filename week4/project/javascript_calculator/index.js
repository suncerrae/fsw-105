var readlineSync = require("readline-sync");


var num1 = readlineSync.questionInt("Please enter your first number: ");
var num2 = readlineSync.questionInt("Please enter your second number: ");
var enterednumber = readlineSync.question("Please enter the operation to perform: add, sub, mul, div: ");

function addNumbers(num1, num2) {
    return "The result is: " + (num1 + num2);
}   
if (enterednumber === "add") {
    console.log(addNumbers(num1, num2));
}


function subtractNumbers(num1, num2) {
    return "The result is: " + (num1 - num2);
}
if (enterednumber === "sub") {
    console.log(subtractNumbers(num1, num2));
}


function multiplyNumbers(num1, num2) {
    return "The result is: " + (num1 * num2);
}
if (enterednumber ==="mul") {
    console.log(multiplyNumbers(num1, num2));
}


function divideNumbers(num1, num2) {
    return "The result is: " + (num1 / num2);
} 
if (enterednumber === "div") {
    console.log(divideNumbers(num1, num2));
}