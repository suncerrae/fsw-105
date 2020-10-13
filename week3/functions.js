
var result = sum(10, 5)
console.log(result)
function numbers(num1, num2, num3) {
    var greatest;
    if (num1 > num2) { 
        greatest = 1
        console.log("num1 is greater than num2");
    }  if(num1 > num3) {
        console.log("num1 is greater than num3");
    } else if(num2 > num3){
        console.log("num2 is greater than num3");
    }
    return num1 + num2 + num3
}
var result = numbers(20, 10, 15)
console.log(result)*/

function findOddEven(num){
    if ( num % 2 === 0) {
        console.log(num + ' is an Even number');
    }else{
        console.log(num + ' is an Odd number');
    }
}

findOddEven(6)



// function findString(string) {
//     if (string.legnth > 20){
//     console.log(string)
//     } else if
//     (string.length < 20) {
// console.log(string + string)
// }
// }
// findString("fishingfishing")
/*for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}*/