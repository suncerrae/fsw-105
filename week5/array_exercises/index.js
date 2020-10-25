// .filter()
// #1

// function fiveAndGreaterOnly(arr){
//     const result = arr.filter(function(num) {
//         if (num >= 5) {
//         return true;
//     }
// });
//     return result;
// };

// console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

// // #2

// function evensOnly(arr)
// {
//     const result = arr.filter(function(num){
//         if (num % 2 == 0)
//             return true;
//     });
//     return result;
// }
// console.log(evensOnly([3, 6, 8, 2]));

// extra credit

// function ofAge(arr)
// {
//     const result = arr.filter(function(canSeeMatrix){
//         if (canSeeMatrix.age >= 17)
//             return true;
//     }
//     )
//     return result;
// }
// console.log (ofAge([
//     { name: "Angelina Jolie", age: 80 },
//     { name: "Eric Jones", age: 2 },
//     { name: "Paris Hilton", age: 5 },
//     { name: "Kayne West", age: 16 },
//     { name: "Bob Ziroll", age: 100 }
// ]));


// section B

// #1

// function doubleNumbers(arr) {
//     const result = arr.map(function(num) {
//         return num *2
//     });

//     return result;
// }


// console.log(doubleNumbers([2, 5, 100]));

// #2

// function stringItUp(arr) 
// {
//     const result = arr.map(function(num){
//         return num.toString();
//     });
//     return result;
// }
// console.log(stringItUp([2, 5, 100]));

// function capitalizeNames(arr)
// {
//     const result = arr.map(function(cap){
//         return cap.charAt(0).toUpperCase() + cap.substr(1).toLowerCase();
//     });
//     return result;  
// }
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


function capitalizeNames(arr)
{
    const result = arr.map(function(cap){
        return cap.charAt(0).toUpperCase() + cap.substr(1).toLowerCase();
    });
    return result;  
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//exrea credit

function namesOnly(arr)
{
    const result = arr.map(function(strings){
        return strings.name;
    });
    return result;
}
console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

//section c

function total(arr) 
{

    const result = arr.reduce(function(finalAdd, num) {
       
        finalAdd = finalAdd + num;
        return finalAdd;
    });
    return result;
}
console.log(total([1, 2, 3]));

//#2

function stringConcat(arr) 
{
    const result = arr.reduce(function(total, num){
        return total + num.toString();
    });
    return result;

}
console.log(stringConcat([1, 2, 3]));

//#3

function totalVotes(arr) 
{
    const result = arr.reduce(function(total, votes) {
        if (votes.voted == true) {
            total++
        }
        return total;
    
    }, 0
    )
    return result;
}

var voters = [
    {name: "Bob" , age: 30, voted: true},
    {name: "Jake" , age: 32, voted: true},
    {name: "Kate" , age: 25, voted: false},
    {name: "Sam" , age: 20, voted: false},
    {name: "Phil" , age: 21, voted: true},
    {name: "Ed" , age: 55, voted: true},
    {name: "Tami" , age: 54, voted: true},
    {name: "Mary" , age: 31, voted: false},
    {name: "Becky" , age: 43, voted: false},
    {name: "Joey" , age: 41, voted: true},
    {name: "Jeff" , age: 30, voted: true},
    {name: "Zack" , age: 19, voted: false}

];

console.log(totalVotes(voters));

//section D

function leastToGreatest(arr) 
{
    const result = arr.sort(function(a, b) {
        return a - b;
    });
    return result;

}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//#2

function greatestToLeast(arr)
{
    const result = arr.sort(function(a, b) {
        return b - a;
    });
    return result;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//#3

function lengthSort(arr)
{
    const result = arr.sort(function(a, b) {
        return a.length - b.length;
    });
    return result;

}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));