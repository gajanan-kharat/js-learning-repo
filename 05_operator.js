
var greaterNum = function(numOne, numTwo){
    var result = numOne>=numTwo ? numOne : numTwo;
    console.log(`Greater number from numbers ${numOne}, ${numTwo} is ${result}`);
}
greaterNum(20, 10);
greaterNum(20, 80);

function isEvenOrOddNum(argOne){
    var result = argOne%2 == 0 ? true : false;
    return result;
}
var returnValue = isEvenOrOddNum(29);
console.log(`Given number 29 is even : ${returnValue}`);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`========= NaN - Not a Number =======`);
console.log(0/0);
console.log(`Undefined and any operator`);
var num;
console.log(num * 10);

console.log(` ======== + Operator ======= `);
// 1. Addition
// 2. Concatenation
// 3. Conversion
var numOne = "20";
console.log(`type of: ${typeof numOne} and it's value is ${numOne}`);
var result = +numOne;
console.log(`type of: ${typeof result} and it's value is ${result}`);

var strOne = "JavaScript";
console.log(`type of: ${typeof strOne} and it's value is ${strOne}`);
var result = +strOne;
console.log(`type of: ${typeof result} and it's value is ${result}`);

function maleMarriageEligibility(gender, age, boyName){
   var result  = (gender=="Male" && age>=21) 
   ? `Hey ${boyName} you are eligible for Marriage` 
   : ` ${boyName} you are Not eligible for Marriage `;
   return result;
}
var message = maleMarriageEligibility("Male", 25, "Bill gates");
console.log(message);
var message = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(message);