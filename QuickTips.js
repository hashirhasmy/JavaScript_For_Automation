//1. find uniq values from array
const arr = [1, 2, 3, 4, 5, 1, 2, 3];
const uniqueValues = [...new Set(arr)];   // ... spread operator to convert Set back to array
console.log(uniqueValues); // Output: [1, 2, 3, 4, 5]

//2. int to String
const num = 123;
const str = num.toString();
console.log(str); // Output: "123"

//3. String to int
const strNum = "456";
const intNum = parseInt(strNum);
console.log(intNum); // Output: 456

//3. float to int
const floatNum = 3.14;
const intFromFloat = parseInt(floatNum);
console.log(intFromFloat); // Output: 3

//4. check if a variable is a number
const value = "T";
const isNumber = typeof value === 'number' && !isNaN(value);
console.log(value + " is a number: " + isNumber); // Output: false

//5. swap variable values
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log("a: " + a + ", b: " + b); // Output: a: 10, b: 5

//6. check if object has a property
const obj = { 
    name: "Alice", 
    age: 30 
};
const hasName = obj.hasOwnProperty('name');
console.log("Object has 'name' property: " + hasName); // Output: true

//7. remove falsy value from the array : (false, 0, "", null, undefined, NaN)
const arrWithFalsy = [0, 1, false, 2, "", 3, null, 4, undefined, 5];
const filteredArray = arrWithFalsy.filter(Boolean);
console.log(filteredArray); // Output: [1, 2, 3, 4, 5]

//8. String  --> Uppercase, lower Case
const str1 = "Hello World";
const upperCaseStr = str1.toUpperCase();
const lowerCaseStr = str1.toLowerCase();
console.log("Uppercase: " + upperCaseStr); // Output: "HELLO WORLD"
console.log("Lowercase: " + lowerCaseStr); // Output: "hello world"

//9. check if Array contains a value
const arr2 = [1, 2, 3, 4, 5];
const containsValue = arr2.includes(3);
console.log("Array contains 3: " + containsValue); // Output: true

//10. check if an array is empty
const arr3 = [];
const isEmpty = arr3.length === 0;
console.log("Array is empty: " + isEmpty); // Output: true

//11. generate a random number
const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random number between " + min + " and " + max + ": " + randomNum); // Output: Random number between 10 and 20: (random number)

//12. Join array elements into a string
const arr4 = ["Hello", "World", "from", "JavaScript"];
const joinedString = arr4.join(" ");
console.log(joinedString); // Output: "Hello World from JavaScript"

//13. get object property
const person = { 
    name: "Bob", 
    age: 25 
};
console.log(person["name"]); // Output: "Bob"

//14. clone an array or object
const originalArray = [1, 2, 3];
const clonedArray = [...originalArray];

const originalObject = { 
    name: "Alice", 
    age: 30 };
const clonedObject = { ...originalObject };  // Spread operator to clone the object

console.log(clonedArray); // Output: [1, 2, 3]
console.log(clonedObject); // Output: { name: "Alice", age: 30 }

//15. convert object to array
const obj2 = { 
    name: "Charlie",    
    age: 28
};

//a. keys array
const keysArray = Object.keys(obj2);
console.log(keysArray); // Output: ["name", "age"]

//b. values array
const valuesArray = Object.values(obj2);
console.log(valuesArray); // Output: ["Charlie", 28]

//c. entries (key-value) array
const objToArray = Object.entries(obj2);
console.log(objToArray); // Output: [["name", "Charlie"], ["age", 28]]

//16. get current date and time
const currentDate = new Date();
console.log("Current date and time: " + currentDate.toString()); // Output: Current date and time: (current date and time)

//17. check varable is defined
let definedVar;
console.log("Variable is defined: " + (typeof definedVar !== 'undefined')); // Output: Variable is defined: true

//18. truncate an array
const arr5 = [1, 2, 3, 4, 5];
arr5.length = 3;
console.log(arr5); // Output: [1, 2, 3]

//10. last element of an array
const arr6 = [1, 2, 3, 4, 5];
const lastElement = arr6[arr6.length - 1];
console.log("Last element of the array: " + lastElement); // Output: Last element of the array: 5


const lastElementAlt = arr6.slice(-1)[0]; // Alternative way to get the last element
console.log("Last element of the array (alternative method): " + lastElementAlt); // Output: Last element of the array (alternative method): 5

