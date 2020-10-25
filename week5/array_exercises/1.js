// .filter()
// #1
function fiveAndGreaterOnly(arr) 
{
    const result = arr.filter(function(num){
        if (num >= 5) 
            return num;
    }
    )
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//#2

function evensOnly(arr)
{
    const result = arr.filter(function(num){
        if (num % 2 == 0)
            return num;
    }
    )
    return result;
}
console.log(evensOnly([3, 6, 8, 2]));

//#3

function fiveCharactersOrFewerOnly(arr) 
{
    const result = arr.filter(function(charct){
        if(charct.length <= 5) 
            return charct;
    }
    )
    return result;
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//#4

function peopleWhoBelongToTheIlluminati(arr) 
{
    const result = arr.filter(function(club){
        if (club.member === true)
            return club;
    }
    )
    return result;
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

//#5

function ofAge(arr)
{
    const result = arr.filter(function(canSeeMatrix){
        if (canSeeMatrix.age >= 18)
            return canSeeMatrix;
    }
    )
    return result;
}
console.log (ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));


// .map()

//#1

function doubleNumbers(arr) {

    const result = arr.map(function(num) {
        return num + num;
    }
    )
    return result;
}
console.log(doubleNumbers([2, 5, 100]));


//#2

function stringItUp(arr) 
{
    const result = arr.map(function(num){
        return num.toString();
    }
    )
    return result;
}
console.log(stringItUp([2, 5, 100]));



//#3

function capitalizeNames(arr)
{
    const result = arr.map(function(cap){
        return cap.charAt(0).toUpperCase() + cap.substr(1).toLowerCase();
    }
    )
    return result;  
}
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));


//#4

function namesOnly(arr)
{
    const result = arr.map(function(strings){
        return strings.name;
    }
    )
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


//#5

function makeStrings(arr)
{
    const result = arr.map(function(pplmovies){
        if (pplmovies.age >= 18) {
        return pplmovies.name + " can go to The Matrix";
        }else {
            return pplmovies.name + " is under age!!";
        }
    }
    )
    return result;
}
console.log(makeStrings([
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


//#6

function readyToPutInTheDom(arr)
{
    const result = arr.map(function(addheaders){
        return "<h1>" + addheaders.name + "</h1><h2>" + addheaders.age + "</h2>"
    }    
    )
    return result;
}
console.log(readyToPutInTheDom([
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


//.reduce()

//#1

function total(arr) 
{

    const result = arr.reduce(function(finalAdd, num) {
       
        finalAdd = finalAdd + num;
        return finalAdd;
    }
    )
    return result;
}
console.log(total([1, 2, 3]));

//#2

function stringConcat(arr) 
{
    const result = arr.reduce(function(total, num){
        return total + num.toString();
    }
    )
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


//#4

function shoppingSpree(arr)
{
    const result = arr.reduce(function(total, items) {
        return total + items.price;
    }, 0
    )
    return result;

}

var wishlist = [
    { title: "Telsa Model S", price: 90000},
    { title: "4 carat diamond ring", price: 45000},
    { title: "Fancy hacky Sack", price: 5},
    { title: "Gold fidget spinner", price: 2000},
    { title: "A second Tesla Model S", price: 90000},
];

console.log(shoppingSpree(wishlist)); 

//#5

function flatten(arr) {

    const result = arr.reduce(function(total, flat) {
        return total.concat(flat);
    }
    )
    return result;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays));


//#6

var voters = [
    {name: "Bob", age: 30, voted: true},
    {name: "Jake", age: 32, voted: true},
    {name: "Kate", age: 25, voted: false},
    {name: "Sam", age: 20, voted: false},
    {name: "Phil", age: 21, voted: true},
    {name: "Ed", age: 55, voted: true},
    {name: "Tami", age: 54, voted: true},
    {name: "Mary", age: 31, voted: false},
    {name: "Becky", age: 43, voted: false},
    {name: "Joey", age: 41, voted: true},
    {name: "Jeff", age: 30, voted: true},
    {name: "Zack", age: 19, voted: false}
    ];
    
    function voterResults(arr)
    {
        const result = arr.reduce(function(total, voter){
        if (voter.age >= 18 && voter.age <= 25)
    {
        total.youth++;
        if (voter.voted == true)
        {
        total.youngVotes++;
        }
    }
        if (voter.age > 25 && voter.age <= 35)
    {
        total.mids++; 
        if (voter.voted == true)
        {
        total.midVotes++;
        }
    }
        if (voter.age > 35 && voter.age <= 55)
    {
        total.olds++;
        if (voter.voted == true)
        {
        total.oldVotes++;
        }
    }
        return total;
    }, {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0}) 
        return result;
    }
    console.log(voterResults(voters));



//.sort()

//#1 

function leastToGreatest(arr) 
{
    const result = arr.sort(function(a, b) {
        return a - b;
    }
    )
    return result;

}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));

//#2

function greatestToLeast(arr)
{
    const result = arr.sort(function(a, b) {
        return b - a;
    }
    )
    return result;
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));

//#3

function lengthSort(arr)
{
    const result = arr.sort(function(a, b) {
        return a.length - b.length;
    }
    )
    return result;

}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));

//#4

function alphabetical(arr)
{
    const result = arr.sort() 
    return result;
    
}
console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));

//#5

function byAge(arr)
{
    const result = arr.sort(function(a, b) {
        return a.age - b.age;

    }
    )
    return result;
}
console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));