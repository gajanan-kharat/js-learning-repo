
function factorialOfNum(num){
    if (num==null || num ==undefined) {
        console.log(`Invalid input : ${num} `);
    } else {
        let fact = 1;
        for (let i = num; i >= 1; i--) {
            fact = fact * i 
        }
        console.log(fact);
    }

}
factorialOfNum(8);
factorialOfNum(3);
factorialOfNum(null);

