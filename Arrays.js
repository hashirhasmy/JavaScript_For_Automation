let cars = ["mu name",1,2];
//or
let cars1 = new Array("bmw","benz","vitz");
console.log("---Print cars array element---\n")
console.log(cars)

console.log("---Print cars 1st index value array element---\n")
console.log(cars[1])

console.log("---Print cars1 array element---\n")
console.log(cars1)

console.log("---Print cars array element using for in loop---\n")
for (let x in cars) {
    console.log(x + ": " + cars[x])
}

console.log("---Change the value of array element---\n")
cars[0] = "updated mu name";
console.log(cars);

console.log("---we can have objects in an array---\n")
let a = {
    name : "hashir",
    age : 24,
    weight : 55
}
let b = {
    name : "harsan",
    age : 23,
    weight : 65
}

let object_array = [a,b];
console.log(object_array)

console.log("---length of an array---\n")
let fruit = ["banana","pineapple","mango",4]
let count = fruit.length;
console.log(count);

console.log("---use a loop to see output of an array---\n")

for (let i = 0; i <= fruit.length-1; i++) {
    console.log(fruit[i])
}

console.log("---use a loop to see output of an array using for/of loop---\n")

for (let z of fruit) {
    console.log(z)
}

console.log("---verify variable is array or not---\n")
console.log(typeof fruit)
//or
console.log(Array.isArray(fruit));