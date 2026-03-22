// console.log("Hello, World!");
// console.warn("This is a warning message.");
// console.error("This is an error message.");

const user = {
    name: "Alice",
    age: 30,
    email: "test@example.com"
};

const user1 = {
    name: "Alice1",
    age: 31,
    email: "test1@example.com"
};

console.table(user);
console.table({user, user1});

//
// console.group("User Information");
// console.log("Name:", user.name);
// console.log("Age:", user.age);
// console.log("Email:", user.email);
// console.groupEnd();

//
// console.time("Loop 1 to N values -  Time");
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.timeEnd("Loop 1 to N values -  Time");


//
//console.clear();