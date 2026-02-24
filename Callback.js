/*

//Example1 : <<<<<<<<<<<<<<<<<<<<<<<<//Callback funchion>>>>>>>>>>>>>>>>>>>>>>>>>>
//async call/task -- once this task is completed -- then only callback function will be called

//basic callback :
function greet(name, callback){
    console.log("fun1 is called " + name);  //normal/async step/task , could be async call/api
    callback();
}

//callback function
function callMe(){
    console.log("fun2 is called");
}

greet("John", callMe); //fun1 is called John

//Example2 : <<<<<<<<<<<<<<<<<<<<<<<<//Callback with async function>>>>>>>>>>>>>>>>>>>>>>>>>>
function printInfo(name, callback){
   //async function/task/step
    setTimeout(function(){
        console.log("Async task completed for " + name);
        callback("Plz call me back.."); //callback function called after async task is completed
    }, 2000); //simulate async task with setTimeout
}

//callback function
function displayInfo(message){
    console.log(message);
}

printInfo("Alice", displayInfo); //Callback function called for Alice

*/

//Example3 : 
function fetchUserData(userId, callback){
    setTimeout(function(){
        const users = {
            1: { id: 1, name: "John", age: 30 },
            2: { id: 2, name: "Alice", age: 25 },
            3: { id: 3, name: "Bob", age: 35 }
        };
        
        const user = users[userId];
        if (user) {
            callback(null, user); // Pass the user data to the callback
        } else {
            callback("User not found", null); // Pass an error message to the callback
        }

    }, 2000); //simulate async data fetching
}

//callback function to handle the fetched user data
function handleUserData(error, user){
    if (error) {
        console.error("Error fetching user data: " + error);
    } else {
        console.log("User Data: ", user);
    }
}

fetchUserData(2, handleUserData); //fetch user data for userId 2 and handle it with callback