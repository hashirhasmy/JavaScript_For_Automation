const numbers = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5];
const names = ['Alice', 'Bob', 'Charlie', 'Alice', 'David', 'Bob'];

const uniqueNumbers = [...new Set(numbers)];
const uniqueNames = [...new Set(names)];
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(uniqueNames); // Output: ['Alice', 'Bob', 'Charlie', 'David']