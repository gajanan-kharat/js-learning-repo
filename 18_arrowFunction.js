

let add = function(){
    console.log(10+10);
    // console.log(this);
}
add();

// Arrow Function 
let multiply = (n1, n2, n3=1) => {
    const result =n1*n2*n3;
    console.log(result);
}
add(100, 100, 200, 349, 756);
multiply(10, 4);

