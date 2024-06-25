
console.log(`===== Sum the numbers from 1 to 5 =======`);
var sum = 0;
for (let i = 1; i <=5; i++) {
    sum = sum + i;  
}
console.log(sum);

console.log(`===== Sum the even numbers from 0 to 50 =======`);
var sumEven = 0;
for (let i = 0; i <=50; i=i+2) {
    sumEven = sumEven + i;  
}
console.log(sumEven);

console.log(`===== Sum of cube of numbers from 1 to 5`);
var sumOfCube = 0;
for (let i = 1; i <=5; i++) {
    var cube = i * i * i;
    sumOfCube = sumOfCube + cube;  
}
console.log(sumOfCube);


function oddPositionedChars(str){
    for (let index = 0; index < str.length; index++) {
        var ch = str.charAt(index);
        if(index%2==1 && ch != ' '){
            console.log(ch);
        }
        
    }
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ");