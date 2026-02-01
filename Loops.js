//for loop :
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: " + i);
}
console.log("-----for of-----");
//for...of loop :
const fruits = ["Apple", "Banana", "Cherry"];    //index 0        1         2
for (const fruit of fruits) {
    console.log("For...of Loop fruit: " + fruit);
}

console.log("-----for in-----");
for(const fruit in fruits){
    console.log(fruit + " For...in Loop fruit: " + fruits[fruit]);
}

console.log("-----for-----");
for(let i=0; i<fruits.length; i++){
    console.log("For Loop fruit: " + fruits[i]);
}


console.log("-----for in-----");
//for...in loop :
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for (const key in person) {
    console.log("For...in Loop " + key + ": " + person[key]);
}



//while loop :
console.log("-----while-----");
let count = 0;
while (count < 5) {
    console.log("While Loop count: " + count);
    count++;
}


//do while loop :
console.log("-----do while-----");
let num = 0;
do {
    console.log("Do...While Loop num: " + num);
    num++;
} while (num < 5);



//break and continue :
console.log("-----break and continue-----");
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log("Break Loop: " + i);
}
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("Continue Loop: " + i);
}



//forEach loop :
console.log("-----forEach-----");
fruits.forEach((fruit, index) => {
    console.log("forEach Loop fruit at index " + index + ": " + fruit);
});