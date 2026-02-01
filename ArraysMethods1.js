//1. map
console.log("--------------Using map method:----------------");
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map((num) => num * 2);
console.log(squaredNumbers); // Output: [2, 4, 6, 8, 10]

//Example 2: map
let fahtemp = [32, 45, 50, 100];

function toCelsius(fah){    
    return (fah - 32) * 5/9;
}

let celtemp = fahtemp.map(toCelsius);

let celtemp2 = fahtemp.map(function(fah){
    return (fah - 32) * 5/9;
});

console.log(celtemp); // Output: [0, 7.222222222222222, 10, 37.77777777777778]
console.log(celtemp2); // Output: [0, 7.222222222222222, 10, 37.77777777777778]


//2. filter
console.log("-------------Using filter method:--------------");
let mixedNumbers = [10, 15, 20, 25, 30, 35];
let evenNumbers = mixedNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [10, 20, 30]

//example 2: filter

let employees = [
    { name: "Alice", age: 28, department: "HR" },
    { name: "Bob", age: 34, department: "Engineering" },
    { name: "Charlie", age: 25, department: "Marketing" },
    { name: "David", age: 30, department: "Engineering" }
];

let employeesOlderThan30 = employees.filter(function(emp){
    return emp.age >= 30;
});

let employeesOlderThan32 = employees.filter((emp) => {
    return emp.age > 32;
});

let employeesInEngineering = employees.filter((emp) => {
    return emp.department === "Engineering";
});

console.log(employeesOlderThan30);
console.log(employeesOlderThan32);
console.log(employeesInEngineering);


//3. reduce
console.log("-------------Using reduce method:--------------");
let values = [1, 2, 3, 4, 5];
let sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


//max number in the Array
let topnumbers = [5, 12, 8, 20, 3];

let maxNumber = topnumbers.reduce((max, current) => {  //max=5 | current=5
    if (current > max) {
        return current;
    } else {
        return max;
    }
}, topnumbers[0]);
console.log(maxNumber); // Output: 20

//min number in the Array
let minNumber = topnumbers.reduce((min, current) => {  //min=5 | current=5
    if (current < min) {
        return current;
    } else {
        return min;
    }
}, topnumbers[0]);
console.log(minNumber); // Output: 3

//cart : name : price
let cart = [
    { name: "item1", price: 100 },
    { name: "item2", price: 200 },
    { name: "item3", price: 150 }
];

let totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice); // Output: 450