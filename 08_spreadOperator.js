

var array = [10, 20, 30, 40, 15];
console.log(array);
console.log(...array);
console.log(array.slice(array.length-2));

console.log(`Merging an array`);
var arrayOne = [1, 3, 4];
var arrayTwo = [7, 9, 5];
var mergeArray = [...arrayOne, ...arrayTwo];
console.log(mergeArray);


var array = [10, 20, 30, 40, 15];
let sum = 0;
for (const element of array) {
    if (element%5==0) {
       console.log(element); 
    }
}