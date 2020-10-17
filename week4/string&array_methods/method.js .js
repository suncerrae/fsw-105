var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper","lettuce"];

function fruitVegArr(arr1, arr2) {

    arr2.pop();
    arr1.shift();
    var orangeInd = arr1.indexOf("orange");
    arr1.push(orangeInd);
    var vegArrLngth = arr2.length;
    arr2.push(vegArrLngth);
    var food = arr1.concat(arr2);
    food.splice(4, 2);
    food.reverse();
    var arrToString = food.join();
    return arrToString;

}

console.log(fruitVegArr(fruit, vegetables));