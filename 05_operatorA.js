

function squareOfWordLength(argOne){
    var len = argOne.length;
    var result = len * len;
    return result;
}
var returnValue = squareOfWordLength("JavaScript");
console.log();
var returnValue = squareOfWordLength("Google Chrome");
console.log();
var returnValue = squareOfWordLength("Developer Smart");
console.log();


var str = "I am Angular Developer";
var len = str.length;
var totalWords = str.split(" ").length;
var result = len / totalWords;

var resultMul = len * totalWords;