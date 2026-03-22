//array/object  ---> variables

//array:
const numbers = [1, 2, 3, 4];
const [a, b, c] = numbers;
//console.log(a); // Output: 1
//console.log(b); // Output: 2
//console.log(c); // Output: 3

const langs = ["python", "javascript", "java", "c++", "ruby"];
const [p,q,...rest] = langs;
//console.log(p); // Output: python
//console.log(q); // Output: javascript
//console.log(rest); // Output: ["java", "c++", "ruby"]


//object:
const person = {
    fname: "John",
    age: 30,
    city: "New York"
};

const { fname, age , city, lname="Doe"} = person;
//console.log(fname); // Output: John
//console.log(age); // Output: 30
//console.log(city); // Output: New York
//console.log(lname); // Output: Doe


//function params:
//without destructuring
function display(person) {
    console.log(`Name: ${person.fname}, Age: ${person.age}`);
}

const person1 = {
    fname: "Alice",
    lname: "Smith",
    age: 25
};  
display(person1); // Output: Name: Alice, Age: 25


//with destructuring
function display({fname, age}) {
    console.log(fname + " " + age);
}

const person2 = {
    fname: "John",
    lname: "Carder",
    age: 27
};  

display(person2); // Output: Name: John, Age: 27

//destructuring in function params
function display({fname, age}) {
    console.log(fname + " " + age);
}
display({fname: "David", age: 21}); // Output: Name: David, Age: 21