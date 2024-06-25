

function isPrime(num){
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;
        }    
    }
    return true;
}
var result = isPrime(7);
console.log(`Given number 7 is Prime: ${result}`);

var result = isPrime(9);
console.log(`Given number 9 is Prime: ${result}`);

const array = [ 3, 9, 7, 6, 19, 29, 53 ]
let count = 0;
for (const num of array) {
    if(isPrime(num)){
        count = count + 1;
    }
}
console.log(count);



class employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new employee(33, "Anil", "IT", 50000, "TCS");
const emp_radha = new employee(22, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new employee(55, "Rishi", "Finance", 47008, "TCS");
const emp_sonali = new employee(66, "Sonali", "Finance", 45008, "Inty");
const emp_monika = new employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new employee(99, "Mahi", "E-commerce", 85000, "Infy");

const arrayEmployees = [emp_anil,emp_radha,emp_rishi,emp_rishi,emp_sonali,emp_monika,emp_vinay,emp_mahi];
let arrayEmpSalary = arrayEmployees.map( (employee)=> {
    return employee.emp_salary;
});

console.log(arrayEmpSalary);