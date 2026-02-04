//1. var : old way to declare variables
//scope : function-level scope + global scope

var x = 10;

function test(){
    var y = 20;
    console.log(x);
}
console.log(x);
test();

//////////////////////////////////
var pop = "Hi JS";
function rel(){
    var top = "Hello JS";
    console.log(top);
}
rel();
console.log(pop);
//console.log(top); // Error: top is not defined

/////////////////////////////////////
var browser = "Chrome";
var browser = "Firefox"; // Re-declaration allowed
browser = "Safari"; // Re-assignment allowed
console.log(browser); // Safari

/////////////////////////////////////
var g;
console.log(g); // undefined
g = 5;
console.log(g); // 5


//issue with var:
var flag = "hey hashir";
var t1 = 4;
if(t1 > 2){
    var flag = "hello hashir";
}
console.log(flag); // hello hashir   : // re-declaration inside block scope affects the variable outside the block

/////////////////////////////////////
// 2. let : modern way to declare variables
// scope : block-level scope + global scope  : {} block

let m = "Hey Naveen";
let time = 4;
if(time > 2){
    let message = "hey how are you";
    console.log(message); // hey how are you
}
//console.log(message); // Error: message is not defined
console.log(m); // Hey Naveen



/////////////////////////////////////
let len = 10;
//let len = 20; // Error: Identifier 'len' has already been declared
len = 30; // Re-assignment allowed
console.log(len); // 30


/////////////////////////////////////
// 3. const : modern way to declare constants
// scope : block-level scope + global scope  : {} block
// not like let, var const must be initialized at the time of declaration 
//const p; // Error: Missing initializer in const declaration
const mg = "Good Morning";
//mg = "Good Night"; // Error: Assignment to constant variable
console.log(mg); 




/*  
personal notes for better understanding:
 
🔑 var vs let vs const — Main Differences
Feature	          var	                                      let	                             const
Scope	            Function scoped	                          Block scoped	                   Block scoped
Can re-declare?	  ✅ Yes	                                  ❌ No	                          ❌ No
Can re-assign?	  ✅ Yes	                                  ✅ Yes	                          ❌ No
Hoisted?	        ✅ Yes (initialized as undefined)	      ⚠️ Yes (not initialized)	       ⚠️ Yes (not initialized)
Modern usage	    ❌ Avoid	                                ✅ Recommended	                  ✅ Recommended


🧱 First understand what a “block” is in JS
==============================================
Anything inside { } is a block.
✅ var — visible almost everywhere (dangerous)

Example:
if (true) {
  var a = 10;
}

console.log(a); // 👉 10 (still accessible)

👉 Even though a was inside { }, JS allows using it outside.

This is what we mean by:
var is NOT limited to the block
It “leaks out”.


✅ let — only visible inside { } (safe)

Example:
if (true) {
  let b = 20;
}

console.log(b); // ❌ Error (not accessible)

👉 b is ONLY inside that block.
Outside doesn’t know about b.


🧠 Think like this (easy memory):
var = no wall 🚪 (goes outside)
let = strong wall 🧱 (stays inside)


📦 Now about "function scoped" simply
=====================================

Example:

function myTest() {
  var x = 5;
  console.log(x); // 5
}
console.log(x); // ❌ Error
👉 var stays inside function, but NOT inside if/for blocks.

🧠 One line to remember forever:
👉 let and const behave same for scope.
👉 var ignores {} blocks
👉 let & const respect {} blocks


🧠 So the correct simple statement is:
👉 var = function scoped (ignores blocks)
👉 let = block scoped (respects blocks + functions)

🎯 Automation example (why this matters):
Using var (bug risk):
for (var i = 0; i < 2; i++) {
  console.log("Running test", i);
}
console.log(i); // 2 😬

Using let (correct):
for (let i = 0; i < 2; i++) {
  console.log("Running test", i);
}
console.log(i); // ❌ Error (good!)
*/


