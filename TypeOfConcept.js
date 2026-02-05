let x = 10;
console.log("Type of x: " + typeof x); //number

x = "Hello World";
console.log("Type of x: " + typeof x); //string

x = {
    name: "Alice",
}
console.log("Type of x: " + typeof x); //object

x = function() {
    console.log("This is a function");
};
console.log("Type of x: " + typeof x); //function

let isAvailable = true;
console.log("Type of isAvailable: " + typeof isAvailable); //boolean
let type = typeof isAvailable;
console.log("Value of type variable: " + type); //boolean


const arr = [1, 2, 3, 4, 5];
console.log("Type of arr: " + typeof arr);

const j = null;
console.log("Type of j: " + typeof j); //object (this is a known quirk in JavaScript)

let y;
console.log("Type of y: " + typeof y); //undefined