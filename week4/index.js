function capilizeAndLowerCase(a){ 
    var lower = a.toLowerCase()
    var upper = a.toUpperCase ()
   
    console.log (upper + lower)
}


capilizeAndLowerCase("helLo") 

const str = 'hello';

console.log(str.slice(0,3))

function capitalizeAndLowerCase(a){ 
    var lower = a.toLowerCase()
    var upper = a.toUpperCase ()
    console.log (lower + upper)
}
capitalizeAndLowerCase("hello")
function halfString(a){ 
    var halfLength = a.length / 2
    console.log(a, halfLength);
    console.log(Math.floor(halfLength));
}
halfString("hello")
const str = 'hello';
var halfLength = str.length / 2
var round = Math.round(halfLength)
console.log(str.slice(0,round))
console.log(round)

