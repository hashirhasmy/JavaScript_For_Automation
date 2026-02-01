//Declaraion of an array
let fruits = ['Apple', 'Banana', 'Cherry']; //Array of strings
let numbers = [1, 2, 3, 4, 5]; //Array of numbers
let myarray = []; //Empty array

console.log("----------------Array Methods Examples----------------");
console.log("----------------Push method----------------");
//1. push() method
let lang = ['JavaScript', 'Python', 'Java', 'C++'];
lang.push('Ruby'); //Adding an element to the end of the array
console.log(lang); //Output: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby']


let arr1 = [10, 20, 30, "Hashir", true];
let arr2 = ["JavaScript", "Python", "Java", "C++"];
let newobject = {
    name: "Hashir",
    age: 26,
    dob: "1999-05-03"
};

arr1.push(arr2); //Adding arr2 as an element to arr1
arr1.push(newobject); //Adding newobject as an element to arr1

console.log(arr1);
//Output: [10, 20, 30, "Hashir", true, ["JavaScript", "Python", "Java", "C++"], {name: "Hashir", age: 26, dob: "1999-05-03"}]

console.log("Accessing the nested object : " + arr1[6].age); //Accessing the nested object
console.log("Accessing the nested object : " + arr1[6]["dob"]); //Accessing the nested object


console.log("----------------pop method----------------");
//2. pop() method
lang.pop(); //Removing the last element from the array
console.log(lang); //Output: ['JavaScript', 'Python', 'Java', 'C++']

console.log("----------------shift and unshift methods----------------");
//3. shift() method
let firstElement = lang.shift(); //Removing the first element from the array
console.log(firstElement); //Output: 'JavaScript'
console.log(lang); //Output: ['Python', 'Java', 'C++']

//4. unshift() method
lang.unshift('HTML'); //Adding an element to the beginning of the array
console.log(lang); //Output: ['HTML', 'Python', 'Java', 'C++']

console.log("----------------splice, slice, concat, indexOf, includes, forEach methods----------------");
//5. splice() method
let animals = ['Dog', 'Cat', 'Elephant', 'Tiger'];
animals.splice(2, 1, 'Giraffe'); //Removing 1 element at index 2 and adding 'Giraffe'
console.log(animals); //Output: ['Dog', 'Cat', 'Giraffe', 'Tiger']

//6. slice() method
let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
let subColors = colors.slice(1, 4); //Extracting elements from index 1 to 3
console.log(subColors); //Output: ['Green', 'Blue', 'Yellow']

//7. concat() method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2); //Combining two arrays
console.log(combinedArray); //Output: [1, 2, 3, 4, 5, 6]

//8. indexOf() method
let colors1 = ['Red', 'Green', 'Blue', 'Yellow', 'Red'];
let index = colors1.indexOf('Blue'); //Finding the index of 'Blue'
console.log(index); //Output: 2

//2nd red index
let secondRedIndex = colors1.indexOf('Red', 2); //Searching for 'Red' starting from index 2
console.log(secondRedIndex); //Output: 4

//9. includes() method
let test = ["a", "b", "c"];
let hasB = test.includes("b"); //Checking if 'b' is in the array
console.log(hasB); //Output: true

//10. forEach() method
let cities = ['New York', 'Los Angeles', 'Chicago'];
    cities.forEach((city) => {           // cities.forEach(function(city) {
    console.log(city);                  // console.log(city);
});                                    // });