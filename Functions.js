//1. Function declaration
console.log("---Function Declaration---\n")
function add(a, b) {
    return a + b;
}

function defaultParameterCheck(a, b = "default value") {
    console.log("This is the function with default parameter : " + a + b);
}
defaultParameterCheck("Hello, ", "default value overided");

let result = add(5, 3);
console.log(result);

function print(){
    console.log("Hello, World!");
}
print();

//2. Function expression : Annonymous function assigned to a variable
console.log("---Function Expression---\n")
let multiply = function(a, b) {
    return a * b;
};

let product = multiply(4, 6);
console.log(product);

//3. Arrow function expression : Annonymous function to a variable with arrow syntax
console.log("---Arrow Function Expression---\n")

const sum = (a, b) => a + b;   //allowed only one expression without curly braces
let sumResult = sum(7, 8);
console.log(sumResult);

let divide = (a, b) => {
    return a / b;
};
let divideResult = divide(10, 2);
console.log(divideResult);

//4. function constructor
console.log("---Function Constructor---\n")
let subtract = new Function('a', 'b', 'return a - b;');
let difference = subtract(10, 4);
console.log(difference);

//5. IIFE (Immediately Invoked Function Expression)
console.log("---IIFE (Immediately Invoked Function Expression)---\n");
(function() {
    console.log("This function runs immediately upon definition!");
})();

//6. Generator function
console.log("---Generator Function---\n")
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
let generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); // undefined, as there are no more yields

//7. Annonymous function
console.log("---Anonymous Function---\n")  // Used as a callback | No specific name

//Example 1 >
setTimeout(function() {
    console.log("This message is from an anonymous function after 2 seconds!");
}, 2000);

//Example 2 >
// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(function(e) {
//     return e * 2;
// });
// console.log(doubledNumbers);

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((e) => {
    return e * 2;
});
console.log(doubledNumbers);

//8. Recursive function
console.log("---Recursive Function---\n")  // A function that calls itself
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let factResult = factorial(5);
console.log(factResult);


//9. High-order function
console.log("---High-Order Function---\n")  // A function that takes another function as an argument or returns a function

function square(x,y) {
    return x * y;
}

function highOrderFunction(fn, value1, value2) {
    return fn(value1, value2);
}

let highOrderResult = highOrderFunction(square, 6, 7);
console.log(highOrderResult);


//10. Callback function
console.log("---Callback Function---\n")  // A function passed into another function as an argument 
function fetchData(callback) {
    setTimeout(() => {
        let data = "Sample Data";
        callback(data);
    }, 1000);   
}

fetchData(function(data) {
    console.log("Received:", data);
});


//add function in to object
console.log("---Function as Object Method---\n")
let calculator = {
    name : "Simple Calculator",
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};
console.log(calculator.name);
console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));


//add function in to array
console.log("---Function in Array---\n")
let functionArray = [
    12, "Hello", function(a, b) 
                    { return a + b; 

                    },
                 function(a, b) 
                    { return a * b; 
                        
                    }
];
console.log(functionArray[1]); // Outputs: Hello
console.log(functionArray[2](3, 4)); // Calls the add function
console.log(functionArray[3](3, 4)); // Calls the multiply function