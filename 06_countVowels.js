
console.log(`Count the total number of a character`);
var word = "JavaScript";
var counter = 0;
for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter ++;
    }
}
console.log(`Total number of a is: ${counter}`);

console.log(`===== Count the total number of vowels ======`);
var str = "I am very good IT Developer";
var vowels = "aeiou";
var counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if(vowels.includes(chLowerCase)){
        counter++;
    }
}
console.log(counter);