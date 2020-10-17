document.add.addEventListener("submit", clickEvent)
console.log(document.add, "form")
document.subtract.addEventListener("submit", clickEvent)
console.log(document.subtract, "form")
document.multiply.addEventListener("submit", clickEvent)
console.log(document.multiply, "form")
function clickEvent(event){
    event.preventDefault()
    var firstNum;
    var secondNum;
    var selectedOperator; 
    if(event.target.name === "add"){
     firstNum = Number(document.add.numOne.value);
console.log(firstNum)
     secondNum = Number(document.add.numTwo.value);
console.log(secondNum)
    selectedOperator = document.add.name;
console.log(document.add.name)
}else if(event.target.name === "subtract"){
     firstNum = Number(document.subtract.numOne.value);
console.log(firstNum)
     secondNum = Number(document.subtract.numTwo.value);
console.log(secondNum)
    selectedOperator = document.subtract.name;
console.log(document.subtract.name)
}else if(event.target.name === "multiply"){
     firstNum = Number(document.multiply.numOne.value);
console.log(firstNum)
     secondNum = Number(document.multiply.numTwo.value);
console.log(secondNum)
 selectedOperator = document.multiply.name;
console.log(document.multiply.name)
}else{console.log(event.target.name)}
function addTwoNumbers(num1, num2){
    document.getElementById("resultOne").innerText="The answer is " + (num1 + num2)
    return "Adding number1 with Number2 = " + (num1 + num2);
}
function subtractTwoNumbers(num1, num2){
    document.getElementById("resultTwo").innerText="The answer is " + (num1 - num2)
    return "Subtracting Number1 and Number 2 = " + (num1 - num2)
}
function multiplyTwoNumbers(num1, num2){
    document.getElementById("resultThree").innerText="The answer is " + (num1 * num2)
    return "Multiply Number1 with Number2 = " + (num1 * num2)
}
if(selectedOperator == "add"){
    console.log(addTwoNumbers(firstNum, secondNum));
} else if(selectedOperator == "subtract") {
    console.log(subtractTwoNumbers(firstNum, secondNum));
} else if (selectedOperator == "multiply"){
    console.log(multiplyTwoNumbers(firstNum, secondNum));
} 
}