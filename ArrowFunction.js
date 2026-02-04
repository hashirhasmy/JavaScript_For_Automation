//1 parameter arrow function
const square = num => num * num;
console.log(square(5)); // Output: 25

//No parameter arrow function
const greet = () => "Hello, World!";
console.log(greet()); // Output: Hello, World!

//Multiple parameters arrow function
const add = (a, b) => a + b;
console.log(add(3, 7)); // Output: 10

//passing object to arrow function
const person = {
    name: "Alice",
    age: 30
}

const introducePerson = person => `${person.name} is ${person.age} years old.`;
const introduction = introducePerson(person); 
console.log(introduction); // Output: Alice is 30 years old.

//Arrow function with default parameters
const greeting = (username = "Guest", age = 0) => `Hello, ${username}! You are ${age} years old.`;
console.log(greeting()); // Output: Hello, Guest! You are 0 years old.
console.log(greeting("Bob", 25)); // Output: Hello, Bob! You are 25 years old.

//rest parameters (three dor parameters | ... varargs parameters )in arrow function
//end number of parameter we can pass if we use rest parameters
const multiply = (...numbers) => numbers.reduce((accumulator, num) => accumulator + num, 0);
multiplyResult = multiply(2, 3, 4, 5, 6, 7);
console.log(multiplyResult); // Output: 27

//
const browserDetails = (browser= "Chrome", ...details) => {
     console.log(`Browser: ${browser}`);
     console.log("Other Details:", details);
}

browserDetails();
browserDetails("Firefox", "Version 89.0", "64-bit", "Windows 10");



//max number using Math
const maxNumber = (...numbers) => {
    return Math.max(...numbers);
}
console.log(maxNumber(10, 25, 5, 30)); // Output: 30