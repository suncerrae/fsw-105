function upperLowerCase(string1) {
var uppercasedHello = string1.toUpperCase();
var lowercasedHello = string1.toLowerCase();
    return uppercasedHello + lowercasedHello;
    
}
console.log(upperLowerCase("Hello"));


function findMiddleIndex(numindex) {
var findTheNum = numindex.length / 2;
    return Math.floor(findTheNum);
}
console.log(findMiddleIndex("Hello world"));


function returnFirstHalf(string) {
var firsthalf = string.slice(0, string.length / 2);
    return firsthalf;
}
console.log(returnFirstHalf("Hello World"));


function capilizeAndLowercase(string2) {
var firsthalfstrng = string2.toUpperCase().slice(0, string2.length / 2);
var lasthalfstrng = string2.toLowerCase().slice(string2.length / 2);
    return(firsthalfstrng + lasthalfstrng);
}
console.log(capilizeAndLowercase("Hello World"));