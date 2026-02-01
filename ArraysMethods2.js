//1. every() - return true if all elements satisfy the condition or return false if any one element fails the condition
console.log("-------------Using every method:--------------");
let ages = [22, 34, 27, 45, 19];
let allAdults = ages.every((age) => age >= 20);
console.log(allAdults); // Output: false

//2. some() - return true if any one element satisfies the condition or return false if all elements fail the condition
console.log("-------------Using some method:--------------");
let hasMinor = ages.some((age) => age < 23);
console.log(hasMinor); // Output: true

//3. find() - returns the first element that satisfies the condition
console.log("-------------Using find method:--------------");
let firstAdult = ages.find((age) => age >= 26);
console.log(firstAdult); // Output: 34

//4. lastIndexOf() - returns the last index of the specified element in the array
console.log("-------------Using lastIndexOf method:--------------");
let numbers = [1, 2, 3, 2, 4, 2];
let lastIndex = numbers.lastIndexOf(2);
console.log(lastIndex); // Output: 5

//5. reverse() - reverses the order of elements in the array
console.log("-------------Using reverse method:--------------");
let fruits = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits); // Output: ["cherry", "banana", "apple"]

//6. sort() - sorts the elements of the array in place and returns the sorted array
console.log("-------------Using sort method:--------------");
let unsortedNumbers = [5, 2, 9, 1, 5, 6];
unsortedNumbers.sort();
console.log(unsortedNumbers); // Output: [1, 2, 5, 5, 6, 9]